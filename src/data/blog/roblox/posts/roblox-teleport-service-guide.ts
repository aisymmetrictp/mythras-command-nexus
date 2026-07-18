import type { BlogPost } from '../../blogTypes';

export const robloxTeleportServiceGuide: BlogPost = {
  slug: 'roblox-teleport-service-guide',
  game: 'roblox',
  category: 'game-guides',
  topicCluster: 'roblox-dev',
  tags: ['teleportservice', 'scripting', 'multiplayer', 'developer', 'servers', 'studio'],
  title: 'Roblox TeleportService Guide: Move Players Between Places',
  metaDescription:
    'Learn Roblox TeleportService the right way: TeleportAsync on the server, reserved servers, party teleports, passing teleport data, handling TeleportInitFailed.',
  excerpt:
    'Every lobby-to-match, hub-to-dungeon, overworld-to-boss-arena game runs on one service. TeleportService moves players between places and servers — but call it wrong and you get flood errors, lost data, and players stranded in the wrong lobby. Here is the version that ships.',
  featuredImagePrompt:
    'A Roblox multi-place experience diagram: a glowing lobby portal beaming a squad of avatars toward a separate match server, teleport-data packets streaming alongside, the Studio script editor showing TeleportAsync code — developer-tool aesthetic, dark UI with neon accents',
  heroImage: '/images/blog/roblox/roblox-teleport-service-guide/teleport-access-control.webp',
  heroImageAlt:
    'The Roblox Creator Dashboard access-control settings that govern which experiences are allowed to teleport players into a place.',
  imageSources: [
    {
      src: '/images/blog/roblox/roblox-teleport-service-guide/teleport-access-control.webp',
      sourceUrl: 'https://create.roblox.com/docs/projects/teleporting',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-teleport-service-guide/roblox-studio-script-editor.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/roblox/roblox-teleport-service-guide/roblox-studio-replicatedstorage.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/roblox/roblox-teleport-service-guide/roblox-studio-interface.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-18T00:00:00.000Z',
  lastUpdated: '2026-07-18T00:00:00.000Z',
  primaryKeyword: 'roblox teleportservice',
  secondaryKeywords: [
    'roblox teleportasync',
    'roblox reserved server',
    'roblox teleport data',
    'roblox teleport party',
    'teleportinitfailed roblox',
    'roblox move player between places',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-teleportservice-is-the-backbone-of-every-multi-place-game', label: 'Why TeleportService is the backbone of every multi-place game', level: 2 },
    { id: 'the-one-line-teleport-and-why-it-must-run-on-the-server', label: 'The one-line teleport (and why it must run on the server)', level: 2 },
    { id: 'teleportoptions-reserved-servers-party-teleports-and-targeting', label: 'TeleportOptions: reserved servers, party teleports, and targeting', level: 2 },
    { id: 'reserving-a-private-server', label: 'Reserving a private server', level: 3 },
    { id: 'teleporting-a-whole-party-together', label: 'Teleporting a whole party together', level: 3 },
    { id: 'passing-data-between-places-and-what-not-to-trust-it-with', label: 'Passing data between places (and what NOT to trust it with)', level: 2 },
    { id: 'handling-failures-teleportinitfailed-and-the-retry-pattern', label: 'Handling failures: TeleportInitFailed and the retry pattern', level: 2 },
    { id: 'custom-loading-screens-with-setteleportgui', label: 'Custom loading screens with SetTeleportGui', level: 2 },
    { id: 'access-control-and-third-party-teleports', label: 'Access control and third-party teleports', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Load into any big Roblox game and you're already using it. The lobby you spawn in, the match you queue into, the boss arena that peels your squad off into its own instance — those aren't rooms in one giant place. They're separate places, and the thing shuttling you between them is **TeleportService**. It's the single most important API for any game bigger than one map, and it's also the one beginners get most spectacularly wrong: called from the client so exploiters hijack it, called in a bare loop so it floods and errors, called with no failure handling so a hiccup strands the player in limbo.

Here's the falsifiable claim to anchor on: TeleportService does not work in Studio playtesting at all. The official docs are blunt about it — you must publish the game and test in the real Roblox client, because teleporting between places has no meaning in a local test session. So every teleport bug you write is a bug you find *live*. That alone is a reason to get the patterns right the first time, and if you can already write a [basic Luau script](/blog/roblox/roblox-scripting-lua-basics) and move around [Studio](/blog/roblox/roblox-studio-basics), this guide gets you from single-map to multi-place without the classic faceplants.

## Why TeleportService is the backbone of every multi-place game

A single Roblox server holds a capped number of players and one loaded map. The moment your game wants a hub that feeds into instanced dungeons, a lobby that spins up fresh matches, or a "join my crew" button that drops friends into the same server, you've outgrown one place. The architecture pros use is a **universe** (one experience) containing **multiple places** (a start place plus extra places), and TeleportService is the glue that moves players and their data across that boundary.

The mental model that keeps this straight: a place is a *what* (the map, its scripts, its assets) and a server is a *where* (a specific running copy of that place). TeleportService can send a player to a place and let Roblox pick the server, to a *specific* server instance, or to a brand-new **reserved server** that only your code holds the key to. Getting fluent with those three targets is most of the battle. The rest is data and error handling.

## The one-line teleport (and why it must run on the server)

The modern method is \`TeleportAsync\`, and it takes three things: the destination \`PlaceId\`, an array of \`Player\` instances to send, and an optional \`TeleportOptions\`. The array is the part beginners miss — even for one player, you pass a table.

\`\`\`lua
local TeleportService = game:GetService("TeleportService")
local Players = game:GetService("Players")

local LOBBY_PLACE_ID = 123456789 -- the PlaceId you are sending players to

local function sendToLobby(player)
	TeleportService:TeleportAsync(LOBBY_PLACE_ID, { player })
end
\`\`\`

That's the whole happy path. But notice where this runs: **on the server, in a Script**, never in a LocalScript. There is a client-side \`Teleport\` method, and you should treat it as a trap. A teleport initiated from the client is a teleport an exploiter controls — they can redirect themselves, or worse, spoof the destination. The docs are explicit that \`TeleportAsync\` cannot be called from client scripts for security reasons, and that's a feature. Let the client *ask* to teleport by firing a [RemoteEvent](/blog/roblox/roblox-remote-events-guide), and let the server decide whether to honor it and run the actual call.

![The Roblox Studio script editor showing a server Script where a TeleportAsync call is written.](/images/blog/roblox/roblox-teleport-service-guide/roblox-studio-script-editor.webp)

One more discipline point: \`TeleportAsync\` is a yielding call that hits Roblox's servers, so it can be rate-limited (a "Flooded" result) if you spam it. Never call it inside a tight loop or on every \`Touched\` event without a debounce. Batch the players you want to move into one call's array instead of firing one call per player, and gate the whole thing behind a cooldown.

## TeleportOptions: reserved servers, party teleports, and targeting

The third argument, \`TeleportOptions\`, is where TeleportService stops being a one-liner and starts being a system. You create one with \`Instance.new("TeleportOptions")\`, set a few properties or call a method, and hand it to \`TeleportAsync\`. The three levers that matter most:

- **ShouldReserveServer** — set \`true\` and the teleport spins up a fresh, private reserved server and drops the players into it. This is how you make instanced content.
- **ServerInstanceId** — target one specific existing public server, so you can pull a player into the exact match a friend is in.
- **ReservedServerAccessCode** — the access code for an already-reserved server, so a second batch of players can join the same private instance you made earlier.

You mix and match these depending on whether you're creating an instance, joining a known instance, or following someone. Let's do the two you'll actually reach for.

### Reserving a private server

Instanced dungeons, ranked matches, "private lobby with your friends only" — all reserved servers. There are two ways in. The blunt way sets \`ShouldReserveServer = true\` on the options and teleports in one shot. The more flexible way calls \`ReserveServerAsync(placeId)\` first, which returns an **access code** plus a private server ID, and *then* teleports using \`ReservedServerAccessCode\`. That second pattern is the one to learn, because the access code is a value you can stash — in a [DataStore](/blog/roblox/roblox-datastore-saving-guide) or a matchmaking table — and reuse to funnel more players into the same instance later.

\`\`\`lua
local code, privateServerId = TeleportService:ReserveServerAsync(MATCH_PLACE_ID)

local options = Instance.new("TeleportOptions")
options.ReservedServerAccessCode = code

TeleportService:TeleportAsync(MATCH_PLACE_ID, playersToSend, options)
\`\`\`

On the destination server, you can read \`game.PrivateServerId\` and \`game.PrivateServerOwnerId\` to confirm you're in a reserved instance and who (if anyone) owns it — handy for gating logic that should only run inside matches. Note the old \`ReserveServer\` method is deprecated; reach for \`ReserveServerAsync\`.

### Teleporting a whole party together

When a squad queues up, you do not want them scattered across four different fresh servers because four separate teleport calls each rolled their own instance. That's exactly what \`TeleportPartyAsync\` prevents: it takes a place ID, an array of players, and optional data, and guarantees the whole group lands in the *same* new server together. It's the right tool for "start match with my party" and the wrong tool to skip in favor of a loop — a loop is the bug.

![The Roblox Studio Explorer with ReplicatedStorage selected, a common home for the RemoteEvents that request server-side teleports.](/images/blog/roblox/roblox-teleport-service-guide/roblox-studio-replicatedstorage.webp)

If you'd rather build the party server yourself and control exactly when players join, reserve a server once, store the access code, and teleport each subgroup into it with \`ReservedServerAccessCode\`. Both approaches are legitimate; the difference is who owns the timing.

## Passing data between places (and what NOT to trust it with)

A teleport that forgets everything about the player is useless. TeleportService gives you two channels for carrying state across the jump, and confusing them is a security hole.

The convenient channel is **teleport data**: call \`SetData\` on your \`TeleportOptions\` (or pass a data table to \`TeleportPartyAsync\`) with a table of basic info, and on the far side read it back with \`Player:GetJoinData()\` (server) or \`TeleportService:GetLocalPlayerTeleportData()\` (client). Great for lightweight, non-sensitive context: which map to load, which difficulty was picked, a cosmetic loadout choice.

\`\`\`lua
local options = Instance.new("TeleportOptions")
options:SetData({ mapName = "Frostpeak", difficulty = "Hard" })

TeleportService:TeleportAsync(MATCH_PLACE_ID, playersToSend, options)

-- On the destination server:
Players.PlayerAdded:Connect(function(player)
	local data = player:GetJoinData().TeleportData
	if data then
		loadMap(data.mapName, data.difficulty)
	end
end)
\`\`\`

Here's the line to burn into memory: **teleport data is not secure**. It is unencrypted and visible to (and forgeable by) the client. Never put currency, inventory counts, purchase state, or anything an exploiter would love to rewrite into teleport data. For anything that can be cheated, the value lives in a [DataStore or memory store](/blog/roblox/roblox-datastore-saving-guide) that the destination server reads authoritatively, or gets validated server-to-server. Teleport data carries *hints*; your data stores carry *truth*. This is the same trust boundary that governs [game passes and developer products](/blog/roblox/roblox-game-passes-developer-products-guide) — the client can ask, but the server verifies.

## Handling failures: TeleportInitFailed and the retry pattern

Teleports fail. A player's target server fills up, Roblox rate-limits you, the destination place is temporarily unreachable — and when a teleport that already started can't complete, the player is left sitting in the original server with nothing happening. That silent stranding is the worst-feeling bug in the genre, and \`TeleportInitFailed\` is how you catch it.

Connect to \`TeleportService.TeleportInitFailed\` and it hands you the player, an \`Enum.TeleportResult\` describing what went wrong, and an error message. The result codes tell you how to react: a **Flooded** result means you're being rate-limited and should back off and retry after a delay; a **Failure** is a transient error worth one retry; and an **IsTeleporting**/invalid case means don't hammer it. The production-grade pattern wraps the teleport in \`pcall\`, listens for \`TeleportInitFailed\`, and retries a bounded number of times with a wait in between.

\`\`\`lua
local ATTEMPT_LIMIT = 5

local function safeTeleport(placeId, player, options)
	local success, result
	for _ = 1, ATTEMPT_LIMIT do
		success, result = pcall(function()
			return TeleportService:TeleportAsync(placeId, { player }, options)
		end)
		if success then break end
		task.wait(1)
	end
	if not success then
		warn("Teleport failed for", player.Name, result)
	end
end

TeleportService.TeleportInitFailed:Connect(function(player, teleportResult, errorMessage)
	if teleportResult == Enum.TeleportResult.Flooded then
		task.wait(5)
	end
	safeTeleport(TARGET_PLACE_ID, player)
end)
\`\`\`

The wrapper isn't optional polish. Any published game that teleports players *will* hit failures at scale, and the difference between a game that shrugs them off and one that dumps players into a frozen lobby is exactly this retry loop. Wrap every teleport call.

## Custom loading screens with SetTeleportGui

The default teleport experience is a blank fade. You can do better. Build a \`ScreenGui\`, and on the client call \`TeleportService:SetTeleportGui(myGui)\` *before* the teleport fires — Roblox will display that GUI over the loading transition into the destination place. One catch worth quoting from the docs: "Any scripts within the ScreenGui do not run." The loading screen is a static picture, not a live interface, so animate it with whatever it needs *before* the jump and don't expect its LocalScripts to keep ticking mid-teleport.

![The Roblox Studio interface where a custom teleport ScreenGui is designed before being passed to SetTeleportGui.](/images/blog/roblox/roblox-teleport-service-guide/roblox-studio-interface.webp)

On the receiving side, the \`LocalPlayerArrivedFromTeleport\` event fires on the client when the player lands, handing you the loading GUI and the teleport data — the clean place to fade your custom screen out gracefully instead of letting it snap away. A branded loading screen with a progress spinner and a tip of the day is a tiny amount of work that makes a multi-place game feel like one continuous experience instead of a series of hard cuts. Treat it as part of your [UI polish pass](/blog/roblox/roblox-ui-design-basics-guide).

## Access control and third-party teleports

The last piece is permission, and it lives on the Creator Dashboard, not in code. Roblox lets you control which experiences are allowed to teleport players *into* your place — the settings range from fully open, to limited to the same universe, to fully secured. If your places refuse to accept teleports and you can't figure out why, this panel is the usual culprit.

The one to understand deliberately is **Allow Third Party Teleports**. Turning it on lets *other people's* experiences teleport players into yours (and cross-experience teleporting to work). That's powerful for hub-and-spoke communities, and it's also a door you're opening — leave it off unless you specifically want external games funneling players in, and know that within your own universe, place-to-place teleports work regardless. Set this consciously; don't cargo-cult it on because a tutorial did.

None of this is exotic once the patterns click. Server-side calls, a \`TeleportOptions\` for anything beyond the basics, data stores for anything that matters, and a retry wrapper around every jump. Get those four habits down and your game can be as big as your imagination — the same backbone that carries the front-page hits carries [your first real multi-place game](/blog/roblox/how-to-make-a-roblox-game) too.

## Quick Action Checklist

- [ ] Call \`TeleportAsync(placeId, { player }, options)\` from a server Script only — never the client \`Teleport\`
- [ ] Let clients *request* teleports via a RemoteEvent; the server decides and executes
- [ ] Pass players as an array even for a single player, and batch groups into one call
- [ ] Use \`ReserveServerAsync\` for instanced content and stash the access code to funnel more players in
- [ ] Send whole squads with \`TeleportPartyAsync\` so they land in the same server — never loop separate calls
- [ ] Carry lightweight context in teleport data; keep currency, inventory, and purchases in DataStores
- [ ] Wrap every teleport in \`pcall\` with a bounded retry, and connect \`TeleportInitFailed\` to handle Flooded/Failure results
- [ ] Add a custom loading screen with \`SetTeleportGui\` (remember its scripts don't run) and fade it on \`LocalPlayerArrivedFromTeleport\`
- [ ] Check the Creator Dashboard access-control settings, and only enable Allow Third Party Teleports on purpose
- [ ] Test teleports in the published game — TeleportService does not work in Studio playtesting`,
  faq: [
    {
      question: 'What is TeleportService in Roblox?',
      answer:
        'TeleportService is the built-in Roblox engine service that moves players between places and servers within an experience. You call TeleportService:TeleportAsync() from a server script with a destination PlaceId, an array of Player instances, and an optional TeleportOptions object, and Roblox sends those players to the target place. It also handles reserved (private) servers, party teleports that keep a group together, passing data across the jump, and custom loading screens. It is the core API behind any game with a lobby, matchmaking, or instanced content.',
    },
    {
      question: 'Why does my Roblox teleport not work in Studio?',
      answer:
        'TeleportService does not support playtesting in Roblox Studio. Because teleporting moves players between separate places and running servers, there is nothing to teleport to in a local Studio test session, so the call simply does nothing. To test any teleport logic you must publish the game and join it through the real Roblox client. This is documented behavior, not a bug, which is why it is important to write teleport code defensively with retries the first time.',
    },
    {
      question: 'How do I teleport a player to a private server in Roblox?',
      answer:
        'Use a reserved server. Call TeleportService:ReserveServerAsync(placeId), which returns an access code and a private server ID. Create a TeleportOptions with Instance.new("TeleportOptions"), set its ReservedServerAccessCode property to the returned code, and pass it to TeleportAsync. All players sent with that access code land in the same private instance. You can store the access code (for example in a DataStore or matchmaking table) to funnel additional players into the same reserved server later. The older ReserveServer method is deprecated in favor of ReserveServerAsync.',
    },
    {
      question: 'Is Roblox teleport data secure?',
      answer:
        'No. Teleport data set with TeleportOptions:SetData() and read back with Player:GetJoinData() or GetLocalPlayerTeleportData() is unencrypted and visible to the client, which means an exploiter can read and forge it. Only use it for non-sensitive context such as which map to load or which difficulty was chosen. Anything that can be cheated — currency, inventory, purchase state, stats — must be stored in a DataStore or memory store that the destination server reads authoritatively, never carried in teleport data.',
    },
    {
      question: 'How do I handle failed teleports in Roblox?',
      answer:
        'Connect to the TeleportService.TeleportInitFailed event, which fires with the player, an Enum.TeleportResult, and an error message when a teleport cannot complete and leaves the player in the original server. Check the result: a Flooded result means you are rate-limited and should wait before retrying, while a Failure is a transient error worth a bounded retry. Wrap the TeleportAsync call in a pcall and retry a fixed number of times with a short task.wait between attempts. This prevents players from being silently stranded when a teleport fails at scale.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/roblox', anchor: 'Roblox coverage hub' },
    { href: '/blog/roblox/roblox-scripting-lua-basics', anchor: 'Roblox Lua scripting basics' },
    { href: '/blog/roblox/roblox-studio-basics', anchor: 'Roblox Studio basics' },
    { href: '/blog/roblox/roblox-remote-events-guide', anchor: 'Roblox RemoteEvents guide' },
    { href: '/blog/roblox/roblox-datastore-saving-guide', anchor: 'Roblox DataStore saving guide' },
    { href: '/blog/roblox/how-to-make-a-roblox-game', anchor: 'How to make a Roblox game' },
  ],
  externalSources: [
    {
      url: 'https://create.roblox.com/docs/projects/teleporting',
      title: 'Roblox Creator Documentation — Teleporting between places (official)',
    },
    {
      url: 'https://create.roblox.com/docs/reference/engine/classes/TeleportService',
      title: 'Roblox Creator Documentation — TeleportService API reference (official)',
    },
  ],
  tldr:
    'TeleportService moves players between places and servers, and it must be called with TeleportAsync from a server script — never the client Teleport, which exploiters control. Use ReserveServerAsync for private instanced servers and TeleportPartyAsync to keep a squad together, carry only non-sensitive context in teleport data (real state lives in DataStores), and wrap every call in a pcall retry while listening to TeleportInitFailed. It does not work in Studio playtesting, so publish to test.',
};
