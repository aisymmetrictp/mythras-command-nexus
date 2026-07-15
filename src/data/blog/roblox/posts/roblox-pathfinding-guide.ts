import type { BlogPost } from '../../blogTypes';

export const robloxPathfindingGuide: BlogPost = {
  slug: 'roblox-pathfinding-guide',
  game: 'roblox',
  category: 'game-guides',
  topicCluster: 'roblox-creation',
  tags: ['pathfindingservice', 'npc', 'scripting', 'ai', 'developer', 'studio'],
  title: 'Roblox PathfindingService: NPCs That Actually Navigate',
  metaDescription:
    'Master Roblox PathfindingService: CreatePath agent defaults, waypoints, material costs, modifiers, PathfindingLinks, and the 8-second MoveTo timeout trap.',
  excerpt:
    'Every bad Roblox NPC has the same tell: it walks straight at you until a wall stops it, then vibrates. PathfindingService fixes that in four steps — CreatePath, ComputeAsync, GetWaypoints, MoveTo — and the agent parameters are where the whole thing lives or dies.',
  featuredImagePrompt:
    'A Roblox Studio viewport with the navigation mesh visualization enabled — walkable areas glowing in overlay color, jump arrows scattered across a terrain map, an NPC mid-route following waypoint markers toward a distant target',
  heroImage: '/images/blog/roblox/roblox-pathfinding-guide/navigation-mesh.webp',
  heroImageAlt:
    'The Roblox Studio navigation mesh visualization, showing colored overlays across the terrain where characters can walk or swim, with small arrows marking where the pathfinder expects a jump.',
  imageSources: [
    {
      src: '/images/blog/roblox/roblox-pathfinding-guide/navigation-mesh.webp',
      sourceUrl: 'https://create.roblox.com/docs/characters/pathfinding',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-pathfinding-guide/path-waypoints.webp',
      sourceUrl: 'https://create.roblox.com/docs/characters/pathfinding',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-pathfinding-guide/paths-shortest-vs-best.webp',
      sourceUrl: 'https://create.roblox.com/docs/characters/pathfinding',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-pathfinding-guide/zombie-door-passthrough-path.webp',
      sourceUrl: 'https://create.roblox.com/docs/characters/pathfinding',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-pathfinding-guide/pathfinding-link-boat.webp',
      sourceUrl: 'https://create.roblox.com/docs/characters/pathfinding',
      license: 'Roblox official documentation © Roblox Corporation',
    },
  ],
  publishDate: '2026-07-15T00:00:00.000Z',
  lastUpdated: '2026-07-15T00:00:00.000Z',
  primaryKeyword: 'roblox pathfinding',
  secondaryKeywords: [
    'roblox pathfindingservice tutorial',
    'roblox createpath agent parameters',
    'roblox npc follow path',
    'roblox path computeasync',
    'roblox pathfinding modifiers',
    'roblox pathfindinglink',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-your-npc-walks-into-a-wall', label: 'Why your NPC walks into a wall', level: 2 },
    { id: 'the-four-step-path-create-compute-read-move', label: 'The four-step path: Create, Compute, Read, Move', level: 2 },
    { id: 'agent-parameters-are-the-whole-game', label: 'Agent parameters are the whole game', level: 2 },
    { id: 'agentradius-and-agentheight', label: 'AgentRadius and AgentHeight', level: 3 },
    { id: 'agentcanjump-and-agentcanclimb', label: 'AgentCanJump and AgentCanClimb', level: 3 },
    { id: 'waypointspacing', label: 'WaypointSpacing', level: 3 },
    { id: 'walking-the-waypoints-without-the-8-second-trap', label: 'Walking the waypoints without the 8-second trap', level: 2 },
    { id: 'material-costs-make-paths-look-smart', label: 'Material costs make paths look smart', level: 2 },
    { id: 'pathfinding-modifiers-danger-zones-and-doors', label: 'Pathfinding modifiers: danger zones and doors', level: 2 },
    { id: 'pathfindinglinks-for-boats-ziplines-and-teleports', label: 'PathfindingLinks for boats, ziplines, and teleports', level: 2 },
    { id: 'handling-blocked-paths-mid-run', label: 'Handling blocked paths mid-run', level: 2 },
    { id: 'when-computeasync-fails-and-why', label: 'When ComputeAsync fails and why', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every bad Roblox NPC has the same tell. It spots you, turns, walks directly at you, hits a crate, and then stands there vibrating against the corner like a Roomba having a crisis. Meanwhile the zombie in a front-page horror game rounds the crate, takes the doorway, and is standing behind you before you've decided which way to run. That difference isn't better AI. It's about forty lines of Luau built on **PathfindingService**, and most of the quality lives in one table you pass to one function.

Here's the claim I'll back up for the rest of this guide: the default agent is a 2-stud-wide, 5-stud-tall character that jumps but refuses to climb, and if you never touch those numbers, your NPC will confidently try to squeeze through gaps its own body doesn't fit in. The parameters are the whole ballgame. Everything else is plumbing.

## Why your NPC walks into a wall

\`Humanoid:MoveTo()\` is not navigation. It's a command that says "aim at this point and hold W." There's no awareness of geometry between here and there. That's fine in an open field and useless anywhere with a wall, which is every real map.

PathfindingService does the part MoveTo can't: it computes a **route** — a list of positions that provably connects A to B across walkable ground — and hands it to you. You still drive the character with MoveTo, but now you're feeding it a breadcrumb trail instead of a straight line.

The engine builds this from a navigation mesh it maintains for your world. You can see it: in Studio, open the **Visualization Options** button in the upper-right of the 3D viewport and enable the navigation mesh overlay. Colored regions are where characters can walk or swim, and the small arrows mark where the pathfinder expects a jump.

That overlay is the hero image at the top of this guide — turn it on before you debug anything. Ninety percent of "pathfinding is broken" reports are actually "there is no mesh where I assumed there was one" — an unanchored part, a gap under a staircase, a floor that's decorative rather than collidable. The overlay tells you in two seconds what an hour of print statements won't. If Studio's viewport is still unfamiliar territory, start with [Studio basics](/blog/roblox/roblox-studio-basics) and come back.

## The four-step path: Create, Compute, Read, Move

The full loop is four calls, and they always go in this order.

**One: create the path object.** Call \`PathfindingService:CreatePath()\` and pass a table of agent parameters. This describes the *body* that will walk the route. You typically create one path object and reuse it rather than making a new one every time.

**Two: compute it.** Call \`path:ComputeAsync(startPosition, endPosition)\` with two Vector3s — usually the character's PrimaryPart position and the destination. It's asynchronous and it can throw, so the docs wrap it in \`pcall\`. Do that. A failed compute inside an unprotected call takes your whole script down.

**Three: check status, then read the waypoints.** Confirm \`path.Status\` equals \`Enum.PathStatus.Success\` before you trust anything. Then \`path:GetWaypoints()\` returns the route as an ordered array from start to finish.

**Four: walk it.** Loop through the waypoints and \`MoveTo()\` each one in turn, waiting on \`MoveToFinished\` between each.

![A computed Roblox path shown as a series of waypoint markers laid out across the route from start point to destination.](/images/blog/roblox/roblox-pathfinding-guide/path-waypoints.webp)

Each waypoint is a \`PathWaypoint\` with three things worth knowing: a \`Position\` (Vector3), an \`Action\` (an \`Enum.PathWaypointAction\`), and a \`Label\` (a string). The Action enum has exactly three values — \`Walk\` (0), \`Jump\` (1), and \`Custom\` (2). That Jump value matters: the pathfinder tells you where to jump, but it does not jump for you. If you ignore the Action, your NPC will walk into the base of every ledge on the route and stall. Setting \`humanoid.Jump = true\` when the waypoint's Action is \`Enum.PathWaypointAction.Jump\` is the one-line fix people spend a weekend not finding.

## Agent parameters are the whole game

This is the table you pass to \`CreatePath()\`, and every field has a documented default. Know them, because the defaults are opinionated.

### AgentRadius and AgentHeight

\`AgentRadius\` defaults to **2** studs and sets the minimum separation from obstacles. \`AgentHeight\` defaults to **5** studs — empty space shorter than this, like the space under a staircase, gets marked non-traversable.

These two exist because the pathfinder plans for a cylinder, not for your actual model. Ship a chunky boss NPC on the default radius of 2 and it'll route through a gap narrow enough for a normal avatar, then grind its shoulders against the frame forever. Measure your model and set the radius to match. Conversely, an oversized \`AgentHeight\` quietly deletes every low tunnel from the mesh and you'll get a \`NoPath\` on a route you can walk yourself in Studio.

### AgentCanJump and AgentCanClimb

\`AgentCanJump\` defaults to **true**. \`AgentCanClimb\` defaults to **false**, and it controls whether the agent will climb \`TrussPart\`s. Turn climbing on and climbable segments arrive with a waypoint \`Label\` of \`Climb\`; the docs note a climbable path costs **1** by default, same as ordinary ground.

Flipping \`AgentCanJump\` to false is the standard move for a wheeled or ground-bound NPC, and it's also the fastest way to make a path fail: if the only route to the destination requires a jump, an agent that can't jump gets no path at all. That's not a bug, that's the parameter doing its job.

### WaypointSpacing

\`WaypointSpacing\` defaults to **4** and controls the distance between intermediate waypoints. Lower it for tighter, more faithful cornering at the cost of more MoveTo calls; raise it for fewer, coarser steps. There's one special value worth remembering: set it to \`math.huge\` and you get **no intermediate waypoints at all** — just the essential turns. That's a legitimate optimization when you have many NPCs and don't need precise cornering.

## Walking the waypoints without the 8-second trap

Here's the gotcha that eats beginners alive, straight out of the \`Humanoid\` documentation: **MoveTo times out after 8 seconds** if the humanoid hasn't reached its goal. The timeout exists deliberately so humanoids don't hang forever waiting on a \`MoveToFinished\` that will never fire — but it means a slow NPC on a long leg silently stops walking and fires \`MoveToFinished\` with \`reached\` as **false**.

The documented workaround is to call \`MoveTo()\` again at a repeated interval so the timeout keeps resetting — Roblox's own sample refreshes every 6 seconds, comfortably inside the window. With default \`WaypointSpacing\` of 4 studs you'll basically never hit this, since each hop is short. Crank the spacing up or slow your \`WalkSpeed\` down and it becomes very real.

Two more details from the same page. MoveTo counts as arrived using roughly a **1-stud threshold**, to absorb differences in walk speed and frame rate — don't write your own equality check against the exact position. And MoveTo also ends early if a script changes \`WalkToPoint\`, \`WalkToPart\`, the RootPart's \`CFrame\`, or calls \`Move()\` with a new direction. If something else in your codebase nudges the character, your path-follower will drop its leg and you'll blame the pathfinder.

Run this on the **server** for anything gameplay-authoritative. An NPC whose position is decided by the client is an NPC exploiters get to drive. If you need client-side smoothing on top, that's a job for [TweenService](/blog/roblox/roblox-tween-animation-guide) and a [RemoteEvent](/blog/roblox/roblox-remote-events-guide), not for relocating the AI.

## Material costs make paths look smart

By default \`ComputeAsync()\` returns the **shortest** path, with a mild preference against jumps. Shortest is not smartest. Shortest is why your NPC wades straight through the swamp instead of taking the bridge fifteen studs to the left.

![Two Roblox paths compared side by side: the geometrically shortest route versus the more sensible route a real player would take.](/images/blog/roblox/roblox-pathfinding-guide/paths-shortest-vs-best.webp)

The fix is the \`Costs\` table in \`CreatePath()\`. Every material has a **default cost of 1**, and you raise the cost of materials you'd rather the agent avoid. The docs' own example assigns \`Water = 20\`, \`CrackedLava = 100\`, \`Slate = 20\`. Higher cost doesn't ban a material — it makes the pathfinder route around it unless the detour is more expensive than going through.

Two edges to know. Set a material to \`math.huge\` and it becomes flatly **non-traversable**. And for a "last resort" material, the docs recommend a high-but-finite value like 100 or 1000, noting there's no engine-enforced upper cap below \`math.huge\` — so the agent will only cross it when every alternative costs more. That distinction is the difference between "avoids the lava" and "would rather stand still forever than touch lava."

## Pathfinding modifiers: danger zones and doors

Costs handle materials. **PathfindingModifiers** handle regions and objects, and they're the tool most people don't know exists.

The workflow: create an anchored part covering the region, drop a \`PathfindingModifier\` inside it, give the modifier a \`Label\` — the docs use \`DangerZone\` — and then include a matching \`DangerZone\` key in your \`Costs\` table. Now a geyser, a lava vent, or a sniper sightline has a routing cost even though it isn't a material. Set it to \`math.huge\` and the region becomes a no-go.

The modifier's other property runs the opposite direction. \`PassThrough\` tells the pathfinder to **ignore** a physical obstacle when routing. The canonical use is a door: physically it's a wall, so the navigation mesh refuses to route through it and your zombie takes the long way around the building. Wrap the door in an anchored part with a \`PassThrough\` modifier and the path goes straight through the doorway — you just have to script the door actually opening when the NPC arrives.

![A Roblox NPC zombie's computed path running directly through a doorway that would otherwise block navigation, enabled by a PassThrough pathfinding modifier.](/images/blog/roblox/roblox-pathfinding-guide/zombie-door-passthrough-path.webp)

This is the single highest-leverage trick for horror and chase games. It's the mechanical reason the good ones feel like they're hunting you — worth studying in the [best Roblox horror games](/blog/roblox/best-roblox-horror-games) before you build your own.

## PathfindingLinks for boats, ziplines, and teleports

Some routes aren't walking. A chasm with a boat, a zipline, a teleport pad — the mesh has no way to express "get in the thing and ride it." That's what \`PathfindingLink\` is for.

![A Roblox path that crosses a chasm by using a boat, made possible by a PathfindingLink connecting two attachments.](/images/blog/roblox/roblox-pathfinding-guide/pathfinding-link-boat.webp)

You create two \`Attachment\`s — the docs' example puts one on a boat seat and one on the landing point — assign them to the link's \`Attachment0\` and \`Attachment1\`, and give the link a \`Label\` like \`UseBoat\`. Add \`UseBoat\` to your \`Costs\` table and the pathfinder will consider that hop as a real option. The docs pair \`UseBoat = 2\` with \`Water = 20\`, which makes riding the boat clearly cheaper than swimming.

The link gets the agent *routed* there; you write the code for what happens. Watch the waypoint \`Label\` as you walk the path, and when it matches \`UseBoat\`, run your boat logic instead of a plain MoveTo. That Label field on PathWaypoint finally earns its keep here.

## Handling blocked paths mid-run

A path is a snapshot. Roblox worlds move — crates fall, floors collapse, players build. Connect \`path.Blocked\` and you get a \`blockedWaypointIndex\` when the route breaks.

The important subtlety, and the docs call it out explicitly: paths can get blocked **behind** the agent. Rubble falling on a corridor you already cleared doesn't mean you should stop and recompute. Guard with a check that the blocked waypoint index is greater than or equal to your current target index, so you only recompute when the obstruction is genuinely ahead. Then disconnect the connection, reset your waypoint tracking, and recompute — otherwise you stack duplicate handlers and recompute storms.

## When ComputeAsync fails and why

When \`path.Status\` isn't \`Success\`, it's almost always \`NoPath\`. Of the six \`Enum.PathStatus\` values, only two remain active — \`Success\` (0) and \`NoPath\` (5); the other four are deprecated. So the status won't diagnose it for you. The documented causes:

- **Path request too long.** Direct line-of-sight distance from start to finish must not exceed **3,000 studs**.
- **Node budget exhausted.** A computation may blow past **20,000 nodes** well before the 3,000-stud cap, especially in vast open worlds or complex mazes.
- **Incompatible agent parameters.** The classic: the destination is only reachable by jumping but \`AgentCanJump\` is false, or \`AgentHeight\` exceeds the clearance on every route.
- **Vertical limits.** Waypoints with a bottom global Y below **-65,536** studs or above **65,536** studs are ignored.

For long-haul travel, the answer isn't fighting the cap — it's chaining. Compute to an intermediate landmark, then recompute from there. And when you truly can't get a path, fail gracefully: have the NPC idle, patrol, or teleport off-screen. Do not let it grind into a wall. That's where we started.

Get this loop right and you're past the hardest part of NPC work. The rest — aggro ranges, state machines, animation — is comparatively easy, and it's the natural next step once you've [built your first game](/blog/roblox/how-to-make-a-roblox-game). If the Luau in here felt slippery, the [scripting basics guide](/blog/roblox/roblox-scripting-lua-basics) is the prerequisite.

## Quick Action Checklist

- [ ] Enable the navigation mesh overlay via Visualization Options before debugging anything — most "broken pathfinding" is missing mesh
- [ ] Reuse one path object from \`CreatePath()\`; don't create a new one per request
- [ ] Always wrap \`ComputeAsync()\` in \`pcall\` and check \`path.Status == Enum.PathStatus.Success\` before reading waypoints
- [ ] Set \`AgentRadius\` (default 2) and \`AgentHeight\` (default 5) to match your actual model, not a default avatar
- [ ] Handle \`Enum.PathWaypointAction.Jump\` by setting \`humanoid.Jump = true\` — the pathfinder marks jumps, it doesn't perform them
- [ ] Respect the 8-second MoveTo timeout: refresh \`MoveTo()\` on an interval (the docs' sample uses 6 seconds) for long or slow legs
- [ ] Use the \`Costs\` table to raise material costs above the default of 1; \`math.huge\` makes a material non-traversable
- [ ] Use PathfindingModifiers with labels for danger zones, and \`PassThrough\` to route NPCs through doors
- [ ] Guard \`path.Blocked\` with a "blocked index is ahead of me" check so rubble behind the agent doesn't trigger a recompute
- [ ] Respect the hard limits — 3,000 studs line-of-sight, 20,000 nodes — and chain through intermediate landmarks for long routes
- [ ] Run pathfinding on the server for anything gameplay-authoritative`,
  faq: [
    {
      question: 'What is PathfindingService in Roblox?',
      answer:
        'PathfindingService is the built-in Roblox engine service that computes walkable routes between two points using the navigation mesh the engine maintains for your world. The workflow is four steps: call PathfindingService:CreatePath() with a table of agent parameters, call path:ComputeAsync(startPosition, endPosition) with two Vector3s, verify path.Status equals Enum.PathStatus.Success, then read the route with path:GetWaypoints() and walk it with Humanoid:MoveTo(). It replaces the naive approach of pointing an NPC at a target and hoping no walls exist in between.',
    },
    {
      question: 'What are the default agent parameters for Roblox CreatePath?',
      answer:
        'Per the official Roblox documentation, CreatePath() defaults are: AgentRadius of 2 studs (minimum separation from obstacles), AgentHeight of 5 studs (empty space shorter than this is non-traversable), AgentCanJump set to true, AgentCanClimb set to false (climbing TrussParts), and WaypointSpacing of 4 studs between intermediate waypoints. The Costs table defaults to nil. Setting WaypointSpacing to math.huge removes intermediate waypoints entirely. You should always set AgentRadius and AgentHeight to match your actual NPC model rather than trusting defaults sized for a standard avatar.',
    },
    {
      question: 'Why does my Roblox NPC stop walking partway along the path?',
      answer:
        'The most common cause is the Humanoid:MoveTo() timeout. The documentation states that a MoveTo operation times out after 8 seconds if the humanoid has not reached its goal, at which point the humanoid stops walking and MoveToFinished fires with reached as false. The fix is to call MoveTo() again at a repeated interval so the timeout keeps resetting — Roblox\'s own code sample refreshes every 6 seconds. MoveTo also ends early if a script changes WalkToPoint, WalkToPart, or the RootPart CFrame, or calls Move() with a new direction.',
    },
    {
      question: 'How do I make a Roblox NPC avoid water or lava?',
      answer:
        'Use the Costs table inside CreatePath(). Every material has a default traversal cost of 1, and raising a material\'s cost makes the pathfinder route around it unless the detour is more expensive. The official example uses Water = 20, CrackedLava = 100, Slate = 20. Setting a material to math.huge makes it completely non-traversable. For a "last resort" material the docs recommend a high but finite value such as 100 or 1000, since there is no engine-enforced upper cap below math.huge, meaning the agent crosses it only when every alternative costs more.',
    },
    {
      question: 'Why does Roblox pathfinding fail with NoPath?',
      answer:
        'Only two Enum.PathStatus values are still active — Success (0) and NoPath (5) — so the status itself will not diagnose the cause. The documented reasons are: the direct line-of-sight distance from start to finish exceeds the 3,000-stud limit; the computation exhausts the 20,000-node budget, which can happen well before the distance cap in open worlds or mazes; incompatible agent parameters, such as a destination only reachable by jumping while AgentCanJump is false, or an AgentHeight taller than any available clearance; or waypoints falling outside the vertical boundary of plus or minus 65,536 studs.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/roblox', anchor: 'Roblox coverage hub' },
    { href: '/blog/roblox/roblox-scripting-lua-basics', anchor: 'Roblox Lua scripting basics' },
    { href: '/blog/roblox/roblox-studio-basics', anchor: 'Roblox Studio basics' },
    { href: '/blog/roblox/roblox-remote-events-guide', anchor: 'Roblox RemoteEvents guide' },
    { href: '/blog/roblox/roblox-tween-animation-guide', anchor: 'Roblox TweenService guide' },
    { href: '/blog/roblox/how-to-make-a-roblox-game', anchor: 'How to make a Roblox game' },
  ],
  externalSources: [
    {
      url: 'https://create.roblox.com/docs/characters/pathfinding',
      title: 'Roblox Creator Documentation — Character pathfinding (official)',
    },
    {
      url: 'https://create.roblox.com/docs/reference/engine/classes/PathfindingService',
      title: 'Roblox Creator Documentation — PathfindingService API reference (official)',
    },
    {
      url: 'https://create.roblox.com/docs/reference/engine/classes/Humanoid',
      title: 'Roblox Creator Documentation — Humanoid MoveTo and MoveToFinished (official)',
    },
  ],
  tldr:
    'Roblox PathfindingService turns NPCs from wall-grinders into navigators in four calls: CreatePath() with agent parameters, ComputeAsync() wrapped in pcall, a Status check, then GetWaypoints() walked via Humanoid:MoveTo(). The agent parameters carry the quality — AgentRadius defaults to 2 studs, AgentHeight to 5, AgentCanJump to true, AgentCanClimb to false, and WaypointSpacing to 4 — and the Costs table (default cost 1 per material, math.huge for non-traversable) plus PathfindingModifiers and PathfindingLinks turn the shortest path into a sensible one. Watch the 8-second MoveTo timeout, handle Jump waypoint actions yourself, and respect the 3,000-stud and 20,000-node computation limits.',
};
