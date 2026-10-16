import Callout from '../components/Callout';
import { CheckIcon, CrossIcon } from '../components/Icons';
import shopBuySell from '../assets/shop-buy-sell.png';
import shopBackArrow from '../assets/shop-back-arrow.png';
import shopSellAll from '../assets/shop-sell-all.png';
import shopSellGui from '../assets/shop-sell-gui.png';
import shopBulkBuyJava from '../assets/shop-bulk-buy-java.png';
import shopBedrockList from '../assets/shop-bedrock-list.jpeg';
import shopBedrockInfo from '../assets/shop-bedrock-info.jpeg';
import shopBedrockAmount from '../assets/shop-bedrock-amount.jpeg';
import shopBedrockConfirm from '../assets/shop-bedrock-confirm.jpeg';
import luckyBlockImg from '../assets/lucky-block.png';

export function Waystones() {
  return (
    <>
      <h1>Waystones</h1>
      <p className="page-desc">Fast-travel between locations using waystones placed throughout the world.</p>

      <h2>What are Waystones?</h2>
      <p>Waystones are fast-travel points that let you teleport between discovered locations. They are placed throughout the world and you can also create your own.</p>

      <h2>How to Create a Waystone</h2>
      <ol>
        <li>Craft or obtain a <b>Lodestone</b> (requires iron ingot + chiseled stone bricks).</li>
        <li>Place the lodestone where you want your waystone.</li>
        <li>Get a <b>Compass</b> and <b>rename it</b> on an anvil — the name you give the compass will become the name of the waystone.</li>
        <li>Hold the renamed compass and <b>right-click the lodestone</b> to register it as a waystone.</li>
      </ol>

      <Callout type="warn"><b>Important:</b> Choose your compass name carefully — it becomes the waystone name and must be unique. If someone already used that name, you'll get an error and need to rename the compass to something different.</Callout>

      <Callout type="tip"><b>Tip:</b> Name your compass something descriptive like "My Base" or "Iron Farm" before right-clicking the lodestone. You cannot change the waystone name after it's created.</Callout>

      <h2>How to Use a Waystone</h2>
      <ol>
        <li>Walk up to any waystone and <b>right-click</b> it to activate it.</li>
        <li>A menu will appear showing all waystones you have activated.</li>
        <li>Select your destination to teleport there.</li>
      </ol>
      <p>Waystones are <b>shared</b> — any player can activate and use a waystone created by another player. Once you right-click a waystone for the first time, it gets added to your travel list.</p>

      <h2>Removing a Waystone</h2>
      <p>To remove a waystone, <b>sneak (hold shift) and mine</b> the lodestone. You cannot break it by mining normally — this prevents accidental removal.</p>

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

      <h2>Java Edition</h2>

      <h3>Basic Buy & Sell</h3>
      <p>Visit any <b>Shop NPC in Town</b> to open the shop GUI. Each item shows its buy and sell price.</p>
      <ul>
        <li><b>Left-click</b> an item to <b>buy</b> it.</li>
        <li><b>Right-click</b> an item to <b>sell</b> it (if you have that item in your inventory).</li>
      </ul>
      <div className="npc-portrait">
        <img src={shopBuySell} alt="Shop GUI showing buy and sell prices" />
      </div>

      <h3>Bulk Buying & Selling</h3>
      <p><b>Shift + Left-click</b> any item to open the <b>Choose Amount</b> menu. Use the green wool buttons to add to your quantity:</p>
      <ul>
        <li><b>+1</b>, <b>+16</b>, or <b>+32</b> — click to increase the amount.</li>
        <li><b>-1</b> or <b>-16</b> — click to decrease the amount.</li>
        <li>Once you've set the amount, click <b>Confirm Purchase</b> or <b>Confirm Sale</b>.</li>
      </ul>
      <div className="npc-portrait">
        <img src={shopBulkBuyJava} alt="Choose Amount menu with +32 button" />
      </div>

      <Callout type="tip"><b>Tip:</b> Use Shift + Left-click to buy or sell in bulk. For example, click +32 twice to buy 64 items at once instead of clicking one by one.</Callout>

      <h3>Sell All (Java)</h3>
      <p>The <b>Sell All</b> feature lets you dump multiple items at once to sell them all in one go.</p>

      <h4>Step 1: Go Back to the Main Menu</h4>
      <p>From any shop category, click the <b>arrow icon</b> to go back to the main Server Market menu.</p>
      <div className="npc-portrait">
        <img src={shopBackArrow} alt="Click the arrow to go back" />
      </div>

      <h4>Step 2: Click Sell All</h4>
      <p>In the Server Market menu, find the <b>Sell All</b> button (chest icon). Click it to open the bulk sell GUI.</p>
      <div className="npc-portrait">
        <img src={shopSellAll} alt="Sell All button in Server Market" />
      </div>

      <h4>Step 3: Place Your Items</h4>
      <p>A blank grid will open. Place all the items you want to sell into this grid.</p>
      <div className="npc-portrait">
        <img src={shopSellGui} alt="Sell All GUI — place items here" />
      </div>
      <ul>
        <li>If an item is <b>sellable</b>, it will be sold automatically when you close the GUI.</li>
        <li>If an item is <b>not sellable</b>, it will be returned to your inventory — nothing is lost.</li>
      </ul>

      <h2>Bedrock Edition</h2>
      <p>Bedrock players get a <b>native popup form</b> instead of the Java chest GUI. The experience is streamlined for touch and controller input.</p>

      <h3>Step 1: Browse the Shop</h3>
      <p>Talk to any <b>Shop NPC</b> to open the shop. You'll see a list of items with their buy and sell prices. Tap the item you want.</p>
      <div className="npc-portrait">
        <img src={shopBedrockList} alt="Bedrock shop list showing items and prices" />
      </div>

      <h3>Step 2: Choose an Action</h3>
      <p>After selecting an item, a popup appears with four options:</p>
      <ul>
        <li><b>Buy</b> — Buy one of this item.</li>
        <li><b>Sell</b> — Sell one of this item from your inventory.</li>
        <li><b>Sell All</b> — Sell <b>all</b> of this item from your inventory at once.</li>
        <li><b>Select Amount</b> — Choose a custom quantity to buy or sell.</li>
      </ul>
      <div className="npc-portrait">
        <img src={shopBedrockInfo} alt="Bedrock product info with Buy, Sell, Sell All, and Select Amount buttons" />
      </div>

      <h3>Step 3: Bulk Buy or Sell</h3>
      <p>Tap <b>Select Amount</b> to enter the quantity you want. Type a number (e.g. <code>64</code>) and tap <b>Submit</b>.</p>
      <div className="npc-portrait">
        <img src={shopBedrockAmount} alt="Bedrock amount selection popup" />
      </div>

      <h3>Step 4: Confirm</h3>
      <p>The popup will update to show the total price for the quantity you selected. Tap <b>Buy</b> or <b>Sell</b> to confirm.</p>
      <div className="npc-portrait">
        <img src={shopBedrockConfirm} alt="Bedrock confirmation showing total price for 64 items" />
      </div>

      <Callout type="tip"><b>Bedrock players:</b> Use <b>Select Amount</b> to buy or sell in bulk. Type the number you want and submit — no need to click multiple times.</Callout>

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

export function DimensionLock() {
  return (
    <>
      <h1>Dimension Lock System</h1>
      <p className="page-desc">This system controls access to Nether and End dimensions. It blocks portals, teleportation, warps, homes, and more for players without permission.</p>

      <h2>How It Works</h2>
      <p>Each dimension (Nether and End) can be locked individually. When a dimension is locked, only players with the required permission can enter. All teleportation methods are blocked — including portals, warps, homes, and commands.</p>

      <Callout type="info"><b>Rank-based access:</b> You unlock dimensions by progressing through the rank system. Higher ranks grant access to more dimensions. Check the <a href="#ranks/overview" style={{ color: 'var(--gold)', fontWeight: 600 }}>Rank Progression</a> page for details.</Callout>

      <h2>Player Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/dimcheck</code><span className="cmd-desc">Check which dimensions you can access</span></div>
        <div className="cmd-row"><code>/dimcheck help</code><span className="cmd-desc">Shows help menu and access symbols</span></div>
      </div>

      <h3>Access Symbols</h3>
      <table className="wiki-table">
        <thead><tr><th>Symbol</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><span style={{ color: 'var(--green)', fontWeight: 700 }}>&#10004;</span></td><td>You <b>can</b> enter this dimension</td></tr>
          <tr><td><span style={{ color: 'var(--red)', fontWeight: 700 }}>&#10008;</span></td><td>You <b>cannot</b> enter this dimension</td></tr>
        </tbody>
      </table>

      <Callout type="warn"><b>Note:</b> Sometimes, admins may lock a dimension entirely if necessary — even players with access permissions will be temporarily blocked until it is unlocked again.</Callout>
    </>
  );
}

export function DeathPenalty() {
  return (
    <>
      <h1>Death Penalty System</h1>
      <p className="page-desc">Dying isn't free. Stay alive, protect your wallet. When you die, the server takes a portion of your coins as a death penalty — the richer you are, the higher the cost.</p>

      <h2>How It Works</h2>
      <ul>
        <li>You must have <b>1,000+ coins</b> in your wallet to be penalized. Below 1,000 = no penalty.</li>
        <li><b>Base rate:</b> 5% when you have 1,000+ coins.</li>
        <li><b>+1%</b> for every 20,000 coins you have.</li>
        <li><b>Maximum:</b> 30% (caps at 500,000+ coins).</li>
        <li><b>Bank deposits are safe</b> — only your wallet is affected.</li>
      </ul>

      <h2>Penalty Breakdown by Balance</h2>
      <table className="wiki-table">
        <thead><tr><th>Wallet Balance</th><th>Penalty Rate</th><th>Example Loss</th></tr></thead>
        <tbody>
          <tr><td>Below 1,000</td><td><span className="badge green">0%</span></td><td>Nothing</td></tr>
          <tr><td>1,000 – 19,999</td><td>5%</td><td>500 on 10,000</td></tr>
          <tr><td>20,000 – 39,999</td><td>6%</td><td>1,800 on 30,000</td></tr>
          <tr><td>40,000 – 59,999</td><td>7%</td><td>3,500 on 50,000</td></tr>
          <tr><td>60,000 – 79,999</td><td>8%</td><td>5,600 on 70,000</td></tr>
          <tr><td>80,000 – 99,999</td><td>9%</td><td>8,100 on 90,000</td></tr>
          <tr><td>100,000 – 119,999</td><td>10%</td><td>10,000 on 100,000</td></tr>
          <tr><td>...</td><td>...</td><td>+1% per 20,000</td></tr>
          <tr><td>500,000+</td><td><span className="badge red">30% (MAX)</span></td><td>180,000 on 600,000</td></tr>
        </tbody>
      </table>

      <Callout type="danger"><b>Warning:</b> Once you hit 500,000+ coins, you're at maximum risk. Every death costs nearly a third of your fortune!</Callout>

      <h2>Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/dpstatus</code><span className="cmd-desc">Check if the system is on, your balance, penalty rate, and full tier breakdown</span></div>
        <div className="cmd-row"><code>/dpcalc &lt;amount&gt;</code><span className="cmd-desc">Calculate what you'd lose at any balance (e.g. <code>/dpcalc 50000</code> shows 3,500 loss at 7%)</span></div>
        <div className="cmd-row"><code>/dpimmunity &lt;hrs&gt;</code><span className="cmd-desc">Buy temporary immunity (10,000 coins/hr)</span></div>
      </div>

      <h2>Survival Tips</h2>
      <ul>
        <li>Keep your wallet under <b>1,000 coins</b> and deposit everything in the <a href="#npcs/anika" style={{ color: 'var(--gold)' }}>Bank</a> — no penalty if your wallet is below the threshold.</li>
        <li>Use <code>/dpstatus</code> to check your current penalty rate before risky adventures.</li>
        <li>Use <code>/dpcalc</code> to preview your potential loss before heading into danger.</li>
        <li>Deposit your coins before entering dungeons, the Frontier, or fighting bosses.</li>
        <li>Keep armor repaired — don't die from preventable damage.</li>
        <li>Consider buying <b>temporary immunity</b> with <code>/dpimmunity</code> for dangerous runs.</li>
      </ul>

      <Callout type="tip"><b>Permanent bypass:</b> You can buy a permanent Death Penalty Bypass from the <a href="#npcs/astrotommy" style={{ color: 'var(--gold)', fontWeight: 600 }}>Stardust Store (AstroTommy)</a> for <b>200,000 Stardust</b>. Once purchased, you'll never lose coins on death again.</Callout>
    </>
  );
}

export function AfkRewards() {
  return (
    <>
      <h1>AFK Reward System</h1>
      <p className="page-desc">Earn coins even when you're away from your keyboard. The longer you stay online, the more you earn.</p>

      <h2>How It Works</h2>
      <p>When you go AFK, you automatically earn <b>1 coin per minute</b> just for being online. After <b>5 minutes</b> of no activity, you'll be marked as AFK automatically — or you can toggle it manually.</p>

      <h2>Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/afk</code><span className="cmd-desc">Toggle AFK mode manually — use it again to return</span></div>
        <div className="cmd-row"><code>/checkafk</code><span className="cmd-desc">Check your current AFK status</span></div>
      </div>

      <h2>Auto-AFK Detection</h2>
      <p>After <b>5 minutes</b> of no activity, the system automatically marks you as AFK. Activity includes:</p>
      <ul>
        <li>Chatting or using commands</li>
        <li>Moving your character</li>
        <li>Opening inventories or clicking items</li>
      </ul>
      <p>You'll automatically return from AFK when you perform any of these actions. The server announces when you go AFK and when you return.</p>

      <h2>VIP Multipliers</h2>
      <p>Higher ranks earn more per minute through AFK multipliers:</p>
      <table className="wiki-table">
        <thead><tr><th>Multiplier</th><th>Earnings/Min</th><th>Per Hour</th></tr></thead>
        <tbody>
          <tr><td>1x (default)</td><td>1 coin</td><td>60 coins</td></tr>
          <tr><td>1.5x</td><td>1.5 coins</td><td>90 coins</td></tr>
          <tr><td>2x</td><td>2 coins</td><td>120 coins</td></tr>
          <tr><td>3x</td><td>3 coins</td><td>180 coins</td></tr>
          <tr><td>5x</td><td>5 coins</td><td>300 coins</td></tr>
          <tr><td>10x</td><td>10 coins</td><td>600 coins</td></tr>
        </tbody>
      </table>

      <Callout type="tip"><b>Tip:</b> Use <code>/afk</code> before stepping away to start earning immediately. Build an AFK area at your base and let the coins roll in while you're away.</Callout>

      <Callout type="info"><b>Note:</b> You must be AFK for at least 1 minute before rewards start. All earnings are added directly to your wallet balance.</Callout>
    </>
  );
}

export function RenameToken() {
  const gradientText = (colors, text, style = {}) => {
    const chars = text.split('');
    return chars.map((char, i) => {
      const p = chars.length > 1 ? i / (chars.length - 1) : 0;
      const sc = colors.length - 1;
      const s = Math.min(Math.floor(p * sc), sc - 1);
      const t = p * sc - s;
      const c1 = colors[s], c2 = colors[s + 1];
      const r = Math.round(parseInt(c1.slice(1,3),16)*(1-t)+parseInt(c2.slice(1,3),16)*t);
      const g = Math.round(parseInt(c1.slice(3,5),16)*(1-t)+parseInt(c2.slice(3,5),16)*t);
      const b = Math.round(parseInt(c1.slice(5,7),16)*(1-t)+parseInt(c2.slice(5,7),16)*t);
      return <span key={i} style={{ color: `rgb(${r},${g},${b})`, ...style }}>{char}</span>;
    });
  };

  return (
    <>
      <h1>Rename Token</h1>
      <p className="page-desc">Rename any item with full color and formatting support. Use color codes, hex colors, and gradients to create unique item names.</p>

      <h2>How to Get a Rename Token</h2>
      <p>Rename Tokens are currently only available from <b>server admins</b> or through <b>special events</b>.</p>

      <h2>How to Use</h2>
      <h3>Method 1: Interactive Mode (Recommended)</h3>
      <ol>
        <li><b>Right-click</b> (Java) or <b>Long-press</b> (Bedrock) the Rename Token</li>
        <li>Type your desired name in chat (e.g. <code>&6Golden &eSword</code>)</li>
        <li>Type <code>@</code> to preview how it looks (optional)</li>
        <li><b>Hold the item</b> you want to rename — not the token!</li>
        <li>Type <code>@@</code> to confirm — the token is consumed</li>
      </ol>

      <h3>Method 2: Quick Command</h3>
      <ol>
        <li>Hold the item you want to rename</li>
        <li>Type <code>/ui rename &lt;name&gt;</code></li>
      </ol>
      <p>Example: <code>/ui rename &c&lLEGENDARY SWORD</code></p>

      <h3>Chat Commands</h3>
      <table className="wiki-table">
        <thead><tr><th>Command</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td><code>@@</code></td><td>Confirm rename (hold item first!)</td></tr>
          <tr><td><code>@</code></td><td>Preview your name</td></tr>
          <tr><td><code>##</code></td><td>Cancel and keep your token</td></tr>
        </tbody>
      </table>

      <Callout type="warn"><b>Important:</b> Hold the item you want to rename <b>before</b> typing <code>@@</code> — not the token! You cannot rename the token itself.</Callout>

      <h2>Color Codes</h2>
      <p>Use <code>&</code> followed by a code to add color and formatting. Never use <code>§</code> — always use <code>&</code>.</p>

      <h3>Basic Colors</h3>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-text" style={{ fontFamily: 'monospace', lineHeight: 2.2 }}>
            <span><code>&0</code> <span style={{ color: '#000', background: '#333', padding: '1px 8px', borderRadius: 3 }}>Black</span></span><br />
            <span><code>&1</code> <span style={{ color: '#0000AA' }}>Dark Blue</span></span><br />
            <span><code>&2</code> <span style={{ color: '#00AA00' }}>Dark Green</span></span><br />
            <span><code>&3</code> <span style={{ color: '#00AAAA' }}>Dark Aqua</span></span><br />
            <span><code>&4</code> <span style={{ color: '#AA0000' }}>Dark Red</span></span><br />
            <span><code>&5</code> <span style={{ color: '#AA00AA' }}>Dark Purple</span></span><br />
            <span><code>&6</code> <span style={{ color: '#FFAA00' }}>Gold</span></span><br />
            <span><code>&7</code> <span style={{ color: '#AAAAAA' }}>Gray</span></span>
          </div>
        </div>
        <div className="card">
          <div className="card-text" style={{ fontFamily: 'monospace', lineHeight: 2.2 }}>
            <span><code>&8</code> <span style={{ color: '#555555' }}>Dark Gray</span></span><br />
            <span><code>&9</code> <span style={{ color: '#5555FF' }}>Blue</span></span><br />
            <span><code>&a</code> <span style={{ color: '#55FF55' }}>Green</span></span><br />
            <span><code>&b</code> <span style={{ color: '#55FFFF' }}>Aqua</span></span><br />
            <span><code>&c</code> <span style={{ color: '#FF5555' }}>Red</span></span><br />
            <span><code>&d</code> <span style={{ color: '#FF55FF' }}>Light Purple</span></span><br />
            <span><code>&e</code> <span style={{ color: '#FFFF55' }}>Yellow</span></span><br />
            <span><code>&f</code> <span style={{ color: '#FFFFFF' }}>White</span></span>
          </div>
        </div>
      </div>

      <h3>Formatting Codes</h3>
      <table className="wiki-table">
        <thead><tr><th>Code</th><th>Effect</th><th>Usage</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td><code>&l</code></td><td>Bold</td><td><code>&c&l</code></td><td><span style={{ color: '#FF5555', fontWeight: 'bold' }}>Bold Red</span></td></tr>
          <tr><td><code>&o</code></td><td>Italic</td><td><code>&d&o</code></td><td><span style={{ color: '#FF55FF', fontStyle: 'italic' }}>Italic Pink</span></td></tr>
          <tr><td><code>&n</code></td><td>Underline</td><td><code>&b&n</code></td><td><span style={{ color: '#55FFFF', textDecoration: 'underline' }}>Underlined Aqua</span></td></tr>
          <tr><td><code>&m</code></td><td>Strikethrough</td><td><code>&7&m</code></td><td><span style={{ color: '#AAAAAA', textDecoration: 'line-through' }}>Strikethrough Gray</span></td></tr>
          <tr><td><code>&k</code></td><td>Obfuscated</td><td><code>&k</code></td><td><span style={{ color: '#55FF55', letterSpacing: 2 }}>▓▒░█▓▒</span></td></tr>
          <tr><td><code>&r</code></td><td>Reset</td><td><code>&r</code></td><td>Resets all formatting</td></tr>
        </tbody>
      </table>

      <h3>Hex Colors & Gradients</h3>
      <p>For custom colors beyond the 16 basic ones, use hex color codes:</p>
      <div className="cmd-list">
        <div className="cmd-row"><code>#ff0000</code><span className="cmd-desc"><span style={{ color: '#ff0000', fontWeight: 'bold' }}>■</span> Red</span></div>
        <div className="cmd-row"><code>#00ff00</code><span className="cmd-desc"><span style={{ color: '#00ff00', fontWeight: 'bold' }}>■</span> Green</span></div>
        <div className="cmd-row"><code>#0000ff</code><span className="cmd-desc"><span style={{ color: '#0000ff', fontWeight: 'bold' }}>■</span> Blue</span></div>
        <div className="cmd-row"><code>#ff8800</code><span className="cmd-desc"><span style={{ color: '#ff8800', fontWeight: 'bold' }}>■</span> Orange</span></div>
        <div className="cmd-row"><code>#8800ff</code><span className="cmd-desc"><span style={{ color: '#8800ff', fontWeight: 'bold' }}>■</span> Purple</span></div>
      </div>

      <p>For smooth color transitions, use gradients:</p>
      <div className="cmd-list">
        <div className="cmd-row"><code>{'<gradient:#ff0000:#ffff00>Fire Sword</gradient>'}</code><span className="cmd-desc">{gradientText(['#ff0000','#ffff00'], 'Fire Sword', { fontWeight: 'bold' })}</span></div>
        <div className="cmd-row"><code>{'<gradient:#0000ff:#00ffff>Ocean Blade</gradient>'}</code><span className="cmd-desc">{gradientText(['#0000ff','#00ffff'], 'Ocean Blade', { fontWeight: 'bold' })}</span></div>
        <div className="cmd-row"><code>{'<gradient:#ff0000:#00ff00:#0000ff>Rainbow</gradient>'}</code><span className="cmd-desc">{gradientText(['#ff0000','#00ff00','#0000ff'], 'Rainbow', { fontWeight: 'bold' })}</span></div>
      </div>

      <Callout type="info"><b>Bedrock players:</b> Gradients work on both Java and Bedrock, but Bedrock cannot display smooth transitions. You'll still see color changes, just not as smoothly as Java. Some emojis also work on Bedrock — try them out yourself!</Callout>

      <h2>Name Ideas</h2>
      <table className="wiki-table">
        <thead><tr><th>Theme</th><th>Code</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td>Fire</td><td><code>{'<gradient:#ff0000:#ff8800:#ffff00>Fire Sword</gradient>'}</code></td><td>{gradientText(['#ff0000','#ff8800','#ffff00'], 'Fire Sword', { fontWeight: 'bold' })}</td></tr>
          <tr><td>Ice</td><td><code>{'<gradient:#00ffff:#0000ff:#ffffff>Frost Blade</gradient>'}</code></td><td>{gradientText(['#00ffff','#0000ff','#ffffff'], 'Frost Blade', { fontWeight: 'bold' })}</td></tr>
          <tr><td>Gold</td><td><code>{'<gradient:#ffff00:#ff8800>Golden Edge</gradient>'}</code></td><td>{gradientText(['#ffff00','#ff8800'], 'Golden Edge', { fontWeight: 'bold' })}</td></tr>
          <tr><td>Epic</td><td><code>&5&l⚔ &d&lDRAGONSLAYER &5&l⚔</code></td><td><span><span style={{ color: '#AA00AA', fontWeight: 'bold' }}>⚔ </span><span style={{ color: '#FF55FF', fontWeight: 'bold' }}>DRAGONSLAYER</span><span style={{ color: '#AA00AA', fontWeight: 'bold' }}> ⚔</span></span></td></tr>
          <tr><td>Cute</td><td><code>&d&o~ &fSnowball &d&o~</code></td><td><span><span style={{ color: '#FF55FF', fontStyle: 'italic' }}>~ </span><span style={{ color: '#FFFFFF' }}>Snowball</span><span style={{ color: '#FF55FF', fontStyle: 'italic' }}> ~</span></span></td></tr>
        </tbody>
      </table>

      <h2>Troubleshooting</h2>
      <ul>
        <li><b>Colors not showing?</b> — Make sure you're using <code>&</code> not <code>§</code>.</li>
        <li><b>Typed wrong name?</b> — Just type a new name to replace it, or <code>##</code> to cancel.</li>
        <li><b>"You must be holding an item!"</b> — Hold the item you want to rename (not the token!) before typing <code>@@</code>.</li>
        <li><b>Token disappeared but item didn't rename?</b> — Make sure you held the correct item before confirming.</li>
      </ul>
    </>
  );
}

export function Dungeons() {
  return (
    <>
      <h1>Dungeons</h1>
      <p className="page-desc">Team up with other players to conquer instanced dungeons filled with custom bosses, unique mobs, and rare loot.</p>

      <h2>What are Dungeons?</h2>
      <p>Dungeons are instanced adventures — separate worlds that your party enters together. Each dungeon has custom enemies, mini-bosses, a final boss, and loot chests scattered throughout. When the dungeon ends, everyone is teleported back to the main world.</p>

      <h2>Available Dungeons</h2>
      <table className="wiki-table">
        <thead><tr><th>Dungeon</th><th>Party Size</th><th>Lives</th><th>Difficulty</th></tr></thead>
        <tbody>
          <tr><td><span style={{ color: '#55FFFF', fontWeight: 700 }}>Snowcloak</span></td><td>1–4 players</td><td>3 lives</td><td>Normal / Master</td></tr>
          <tr><td><span style={{ color: '#FF5555', fontWeight: 700 }}>Lab of Horrors</span></td><td>1–5 players</td><td>3 lives</td><td>Normal / Master</td></tr>
        </tbody>
      </table>

      <h2>Difficulty Levels</h2>
      <p>When starting a dungeon, you can choose between <b>Normal</b> and <b>Master</b> difficulty.</p>
      <table className="wiki-table">
        <thead><tr><th>Stat</th><th>Normal</th><th>Master</th></tr></thead>
        <tbody>
          <tr><td>Mob Health</td><td>100%</td><td><span style={{ color: '#FF5555', fontWeight: 700 }}>150%</span></td></tr>
          <tr><td>Mob Damage</td><td>100%</td><td><span style={{ color: '#FF5555', fontWeight: 700 }}>125%</span></td></tr>
        </tbody>
      </table>

      <Callout type="warn"><b>Master mode</b> is for experienced players. Mobs hit harder and take longer to kill. Make sure your party is well-geared before attempting it!</Callout>

      <h2>How to Enter a Dungeon</h2>
      <ol>
        <li><b>Talk to the Dungeon Master</b> — Find the Dungeon Master NPC and select the dungeon you want to run.</li>
        <li><b>Recruit your party</b> — Use <code>/recruit</code> to broadcast a public listing. All online players see it and can join.</li>
        <li><b>Start the dungeon</b> — Once your party is ready, the leader starts the dungeon.</li>
        <li><b>Acknowledge</b> — All party members must accept the dungeon prompt to enter together.</li>
      </ol>

      <Callout type="tip"><b>Solo players</b> can also enter dungeons alone without using <code>/recruit</code> — but having teammates makes boss fights much easier!</Callout>

      <Callout type="warn"><b>You drop items on death!</b> If you die inside a dungeon, your inventory drops on the ground. Make sure to pick up your items when you respawn at the checkpoint. Bring good equipment, food, and potions — but leave anything you can't afford to lose behind.</Callout>

      <h2>Inside the Dungeon</h2>
      <ul>
        <li><b>Lives</b> — Each player has <b>3 lives</b>. Dying uses a life and drops your inventory. When all lives are gone, you become a spectator.</li>
        <li><b>Checkpoints</b> — Walking through certain areas saves your respawn point. If you die, you respawn at the last checkpoint.</li>
        <li><b>Loot Chests</b> — Interact with glowing chests throughout the dungeon for random loot (crafting materials, rare items).</li>
        <li><b>Boss Fights</b> — Each dungeon has a final boss. Defeat it to complete the dungeon and earn rewards.</li>
      </ul>

      <h2>Dungeon Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/md play &lt;dungeon&gt;</code><span className="cmd-desc">Start a dungeon (party leader only)</span></div>
        <div className="cmd-row"><code>/md leave</code><span className="cmd-desc">Leave the dungeon and return to the main world</span></div>
        <div className="cmd-row"><code>/md lives</code><span className="cmd-desc">Check how many lives you have left</span></div>
        <div className="cmd-row"><code>/md stuck</code><span className="cmd-desc">Teleport to your last checkpoint if you're stuck</span></div>
      </div>

      <h2>Party Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/recruit</code><span className="cmd-desc">Create a public party listing for a dungeon run</span></div>
      </div>

      <h2>Rewards</h2>
      <p>Completing a dungeon rewards you with:</p>
      <ul>
        <li><b>Loot Chest Drops</b> — Crafting materials like Cobalt, Mithril, Steel, and Magic Essence from chests along the way.</li>
        <li><b>Boss Drops</b> — The final boss drops rare dungeon-exclusive weapons and armor through a loot shower.</li>
        <li><b>XP</b> — Experience points from killing mobs and bosses.</li>
      </ul>

      <Callout type="warn"><b>Banned Items:</b> Elytra cannot be used inside dungeons. Certain items may also be restricted — check the dungeon entrance for details.</Callout>

      <h2>Rules & Restrictions</h2>
      <ul>
        <li>You <b>cannot break or place blocks</b> inside dungeons.</li>
        <li>Ender pearls, chorus fruit, and buckets are <b>disabled</b>.</li>
        <li>If you disconnect, you have <b>5 minutes</b> to rejoin before being kicked from the dungeon.</li>
        <li>If all party members lose all lives, the dungeon ends and everyone is sent back.</li>
      </ul>

      <Callout type="tip"><b>Tip:</b> Deposit your coins at the <a href="#npcs/anika" style={{ color: 'var(--gold)' }}>Bank</a> before entering a dungeon. If you die inside, the Death Penalty still applies to your wallet!</Callout>
    </>
  );
}

export function Recruit() {
  return (
    <>
      <h1>Party Recruitment (/recruit)</h1>
      <p className="page-desc">Find teammates for dungeons by creating or joining public party listings.</p>

      <h2>What is /recruit?</h2>
      <p>The <code>/recruit</code> command lets you create a public party listing that other players can see and join. It's the easiest way to find teammates for dungeons when your friends aren't online.</p>

      <h2>How It Works</h2>
      <ol>
        <li><b>Use /recruit</b> — The party leader types <code>/recruit</code> to create a public listing for a dungeon.</li>
        <li><b>All players see it</b> — A recruitment popup appears for all online players with the option to join.</li>
        <li><b>Players accept</b> — Interested players click to join the party directly from the popup.</li>
        <li><b>Enter the dungeon</b> — Once the party is ready, the leader starts the dungeon. All members must acknowledge the prompt.</li>
      </ol>

      <h2>Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/recruit</code><span className="cmd-desc">Create a public party listing — all online players see it and can join</span></div>
      </div>

      <h2>Step-by-Step: Joining a Dungeon Run</h2>
      <ol>
        <li>The party leader types <code>/recruit</code> to broadcast a recruitment listing.</li>
        <li>A popup appears on your screen — click to join the party.</li>
        <li>Once the leader is satisfied with the party size, they start the dungeon.</li>
        <li>All party members get a prompt — <b>acknowledge</b> it to enter together.</li>
      </ol>

      <Callout type="tip"><b>Tip:</b> You don't need a full party to enter a dungeon. Even solo players can run dungeons — but having teammates makes boss fights much easier and more fun!</Callout>

      <Callout type="info"><b>Party XP:</b> When in a party, experience is split among members. Stick together for the best results.</Callout>
    </>
  );
}

export function LuckyBlock() {
  return (
    <>
      <h1>Lucky Blocks</h1>
      <p className="page-desc">Break a Lucky Block for a random reward — or a random punishment. High risk, high reward.</p>

      <div className="npc-portrait">
        <img src={luckyBlockImg} alt="Lucky Block" />
      </div>

      <h2>What is a Lucky Block?</h2>
      <p>Lucky Blocks are special custom blocks that drop a <b>random outcome</b> when broken. You could get legendary weapons, rare materials, helpful buffs — or you could get poisoned, trapped in obsidian, or swarmed by mobs. Every break is a gamble.</p>

      <h2>How to Break</h2>
      <ul>
        <li>Requires a <b>Diamond Pickaxe</b> or <b>Netherite Pickaxe</b> to mine.</li>
        <li>Hardness is the same as obsidian — it takes time to break.</li>
        <li>The block is <b>explosion-proof</b> — TNT won't destroy it.</li>
      </ul>

      <Callout type="warn"><b>Warning:</b> Lucky Blocks can spawn hostile mobs, TNT, lava, and other hazards. Break them in a safe area and be ready to fight or run!</Callout>

      <h2>Drop Chances</h2>
      <table className="wiki-table">
        <thead><tr><th>Category</th><th>Chance</th><th>Outcomes</th></tr></thead>
        <tbody>
          <tr><td><span style={{ color: '#FFAA00', fontWeight: 700 }}>Legendary</span></td><td>0.002%</td><td>5 rewards</td></tr>
          <tr><td><span style={{ color: '#AA00AA', fontWeight: 700 }}>Epic</span></td><td>3%</td><td>8 rewards</td></tr>
          <tr><td><span style={{ color: '#5555FF', fontWeight: 700 }}>Rare</span></td><td>6%</td><td>7 rewards</td></tr>
          <tr><td><span style={{ color: '#55FF55', fontWeight: 700 }}>Common</span></td><td>12%</td><td>12 rewards</td></tr>
          <tr><td><span style={{ color: '#55FFFF', fontWeight: 700 }}>Blessed (Buffs)</span></td><td>14%</td><td>5 buffs</td></tr>
          <tr><td><span style={{ color: '#FF5555', fontWeight: 700 }}>Unlucky (Debuffs)</span></td><td>22%</td><td>8 debuffs</td></tr>
          <tr><td><span style={{ color: '#FF5555', fontWeight: 700 }}>Environment Hazards</span></td><td>17%</td><td>6 hazards</td></tr>
          <tr><td><span style={{ color: '#FF5555', fontWeight: 700 }}>Mob Spawns</span></td><td>17%</td><td>8 mob types</td></tr>
          <tr><td><span style={{ color: '#FF55FF', fontWeight: 700 }}>Troll / Weird</span></td><td>9%</td><td>5 events</td></tr>
        </tbody>
      </table>

      <Callout type="info"><b>Overall odds:</b> ~35% chance of something good, ~56% chance of something bad, and ~9% chance of something weird. Think twice before breaking one!</Callout>

      <h2>Legendary Rewards (0.002%)</h2>
      <p>Extremely rare. The entire server is notified when someone gets a Legendary drop.</p>
      <table className="wiki-table">
        <thead><tr><th>Reward</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td>Legendary Elemental Sword</td><td>Random element (Inferno, Glacial, Voltaic, Dusk, Dawn)</td></tr>
          <tr><td>Beacon</td><td>x1</td></tr>
          <tr><td>Nether Star</td><td>x1</td></tr>
          <tr><td>Diamond Block</td><td>x1</td></tr>
          <tr><td>Netherite Block</td><td>x1</td></tr>
        </tbody>
      </table>

      <h2>Epic Rewards (3%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Reward</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td>Mithril Ingot</td><td>3-5x</td></tr>
          <tr><td>Raw Hextech</td><td>2-4x</td></tr>
          <tr><td>Magic Essence</td><td>2-3x</td></tr>
          <tr><td>Epic Elemental Sword</td><td>Random element</td></tr>
          <tr><td>Dungeon Weapon</td><td>Random blade, bow, or wand</td></tr>
          <tr><td>Legendary Tome</td><td>x1</td></tr>
          <tr><td>Rare Tome</td><td>1-2x</td></tr>
          <tr><td>Netherite Ingot</td><td>1-2x</td></tr>
        </tbody>
      </table>

      <h2>Rare Rewards (6%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Reward</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td>Raw Cobalt</td><td>5-10x</td></tr>
          <tr><td>Steel Ingot</td><td>3-6x</td></tr>
          <tr><td>Magic Fragment</td><td>4-8x</td></tr>
          <tr><td>Rare Elemental Sword</td><td>Random element</td></tr>
          <tr><td>Common Tome</td><td>1-2x</td></tr>
          <tr><td>Diamonds</td><td>8x</td></tr>
          <tr><td>Ancient Debris</td><td>2-4x</td></tr>
        </tbody>
      </table>

      <h2>Common Rewards (12%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Reward</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td>Iron Ingots</td><td>32x</td></tr>
          <tr><td>Gold Ingots</td><td>16x</td></tr>
          <tr><td>Diamonds</td><td>4x</td></tr>
          <tr><td>Emeralds</td><td>8x</td></tr>
          <tr><td>Steak</td><td>32x</td></tr>
          <tr><td>Golden Apples</td><td>16x</td></tr>
          <tr><td>Experience</td><td>500 XP</td></tr>
          <tr><td>Ender Pearl</td><td>1-4x</td></tr>
          <tr><td>Ender Chest</td><td>x1</td></tr>
          <tr><td>Sponges</td><td>4x</td></tr>
          <tr><td>Enchanted Iron Pickaxe</td><td>Efficiency III</td></tr>
          <tr><td>Enchanted Iron Sword</td><td>Sharpness II</td></tr>
        </tbody>
      </table>

      <h2>Blessed Buffs (14%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Buff</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>Strength I + Resistance I</td><td>60 seconds</td></tr>
          <tr><td>Haste II</td><td>90 seconds</td></tr>
          <tr><td>Regeneration II + Absorption II</td><td>30s / 120s</td></tr>
          <tr><td>Night Vision I + Speed I</td><td>300s / 120s</td></tr>
          <tr><td>Fire Resistance + Water Breathing</td><td>180 seconds</td></tr>
        </tbody>
      </table>

      <h2>Unlucky Debuffs (22%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Debuff</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>Slowness II</td><td>15 seconds</td></tr>
          <tr><td>Poison I</td><td>10 seconds</td></tr>
          <tr><td>Blindness I</td><td>8 seconds</td></tr>
          <tr><td>Weakness II</td><td>20 seconds</td></tr>
          <tr><td>Mining Fatigue II</td><td>15 seconds</td></tr>
          <tr><td>Hunger III</td><td>10 seconds</td></tr>
          <tr><td>Wither I + Slowness I</td><td>5s / 10s</td></tr>
          <tr><td>Nausea I + Blindness I</td><td>10s / 5s</td></tr>
        </tbody>
      </table>

      <h2>Environment Hazards (17%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Hazard</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Obsidian Prison</td><td>3x3 cage around you. Mining Fatigue for 30s. Auto-frees after 15 seconds.</td></tr>
          <tr><td>Anvil Rain</td><td>5 anvils fall from 20 blocks high. Deadly if hit!</td></tr>
          <tr><td>Lightning Strike</td><td>Lightning strikes your location.</td></tr>
          <tr><td>Lava Trap</td><td>Lava on 4 sides. Brief Fire Resistance. Clears after 5 seconds.</td></tr>
          <tr><td>TNT Trap</td><td>3 TNT spawn around you. ~3-4 seconds to run!</td></tr>
          <tr><td>Launch Skyward</td><td>Levitation V for 3 seconds.</td></tr>
        </tbody>
      </table>

      <h2>Mob Spawns (17%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Mob</th><th>Stats</th></tr></thead>
        <tbody>
          <tr><td>Cursed Zombie (x3)</td><td>30 HP, 5 DMG, iron sword, chainmail armor</td></tr>
          <tr><td>Haunted Skeleton (x2)</td><td>25 HP, 6 DMG, bow, iron helmet</td></tr>
          <tr><td>Super Creeper (x1)</td><td>20 HP, explosion radius 4</td></tr>
          <tr><td>Venomous Spider (x3)</td><td>15 HP, 4 DMG, fast movement</td></tr>
          <tr><td>Dark Witch (x1)</td><td>40 HP</td></tr>
          <tr><td>Charged Creeper (x1)</td><td>20 HP, explosion radius 6</td></tr>
          <tr><td>Mega Slime (x1)</td><td>60 HP, size 8</td></tr>
          <tr><td>Ghostly Horseman (x1)</td><td>50 HP, 8 DMG, rides skeleton horse</td></tr>
        </tbody>
      </table>

      <h2>Troll / Weird (9%)</h2>
      <table className="wiki-table">
        <thead><tr><th>Event</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Sky Launch</td><td>Levitation III for 3s, then Slow Falling for 10s</td></tr>
          <tr><td>Cursed Potato</td><td>1x Poisonous Potato</td></tr>
          <tr><td>Chicken Explosion</td><td>10 chickens spawn at your location</td></tr>
          <tr><td>Glow + Speed</td><td>Glowing for 30s, Speed III for 15s</td></tr>
          <tr><td>Anvil Rain (Blessing?)</td><td>Free anvils from the sky! ...dodge!</td></tr>
        </tbody>
      </table>

      <Callout type="tip"><b>Tip:</b> Deposit your coins at the Bank before breaking Lucky Blocks. Some hazards can kill you, and the Death Penalty still applies!</Callout>
    </>
  );
}
