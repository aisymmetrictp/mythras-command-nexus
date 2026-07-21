import type { BlogPost } from '../../blogTypes';

export const robloxModuleScriptsGuide: BlogPost = {
  slug: 'roblox-module-scripts-guide',
  game: 'roblox',
  category: 'game-guides',
  topicCluster: 'roblox-creation',
  tags: ['module-scripts', 'scripting', 'code-organization', 'developer', 'studio'],
  title: 'Roblox ModuleScripts Guide: Stop Copy-Pasting Code',
  metaDescription:
    'Master Roblox ModuleScripts: how require() works, the once-per-environment cache, where to store modules, the OOP .new() pattern, and how to avoid circular requires.',
  excerpt:
    "The moment you paste the same block of code into a third script, you've outgrown Scripts and LocalScripts. ModuleScripts are how real Roblox games stay maintainable — one source of truth, required from everywhere. Here's exactly how require() works, where modules live, the cache gotcha that confuses everyone, and the OOP pattern that powers most serious codebases.",
  featuredImagePrompt:
    'A clean Roblox Studio view showing a ModuleScript nested under ReplicatedStorage in the Explorer, with the script editor open on a returned table of functions and a require() call in a separate Script — developer-tool aesthetic',
  heroImage: '/images/blog/roblox/roblox-module-scripts-guide/roblox-studio-interface.webp',
  heroImageAlt:
    'The Roblox Studio interface where ModuleScripts are written, showing the 3D viewport, the Explorer tree with services like ReplicatedStorage, and the script editor used for Luau code.',
  imageSources: [
    {
      src: '/images/blog/roblox/roblox-module-scripts-guide/roblox-studio-interface.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/roblox/roblox-module-scripts-guide/roblox-studio-explorer.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/roblox/roblox-module-scripts-guide/roblox-studio-editor.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-21T00:00:00.000Z',
  lastUpdated: '2026-07-21T00:00:00.000Z',
  primaryKeyword: 'roblox module scripts',
  secondaryKeywords: [
    'roblox modulescript tutorial',
    'roblox require function',
    'roblox modulescript vs script',
    'roblox reusable code',
    'roblox oop module',
    'roblox modulescript cache',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-copy-paste-wall', label: 'The copy-paste wall', level: 2 },
    { id: 'what-a-modulescript-actually-is', label: 'What a ModuleScript actually is', level: 2 },
    { id: 'your-first-module-return-one-thing', label: 'Your first module: return one thing', level: 2 },
    { id: 'requiring-it-from-anywhere', label: 'Requiring it from anywhere', level: 2 },
    { id: 'the-cache-the-part-everyone-misreads', label: 'The cache: the part everyone misreads', level: 2 },
    { id: 'once-per-environment-server-and-client-are-separate', label: 'Once per environment: server and client are separate', level: 3 },
    { id: 'where-to-store-modules', label: 'Where to store modules', level: 2 },
    { id: 'the-oop-pattern-new-and-metatables', label: 'The OOP pattern: .new() and metatables', level: 2 },
    { id: 'the-traps-circular-requires-and-shared-state', label: 'The traps: circular requires and shared state', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You wrote a neat function that formats a number as \`1.2K\` or \`3.4M\` for your currency display. It works great. Then you need it in your shop UI, so you copy it. Then in your leaderboard, so you copy it again. Then you fix a bug in one copy and forget the other two. Congratulations — you've hit the copy-paste wall, and every Roblox developer hits it. The way through it is the **ModuleScript**, the single most important tool for keeping a growing game from collapsing into spaghetti.

A ModuleScript is how you write a piece of code *once* and use it from everywhere — one source of truth that a hundred other scripts can borrow. It's the jump from "I have a folder of scripts that each do one thing" to "I have a real, organized codebase." If you've got the [Studio basics](/blog/roblox/roblox-studio-basics) down and can write a [first Luau script](/blog/roblox/roblox-scripting-lua-basics), modules are the next thing that levels you up. Let's break down exactly how they work, including the cache behavior that trips up nearly everyone.

![The Roblox Studio interface where ModuleScripts are written, showing the 3D viewport, the Explorer tree with services, and the script editor.](/images/blog/roblox/roblox-module-scripts-guide/roblox-studio-interface.webp)

## The copy-paste wall

Regular Scripts and LocalScripts *run on their own*. Drop a Script into the Workspace and Roblox executes it automatically when the game starts. That's perfect for "do this thing" logic — spawn the boss, start the round timer. But it's the wrong shape for *shared* logic, because a Script can't cleanly hand its functions to another Script. They each run in their own little world.

A ModuleScript is the opposite: it does **not** run on its own. It just sits there holding code, waiting for another script to ask for it. When a script calls \`require()\` on it, the module runs, hands back whatever it returns, and that returned value is now usable by the requester. One module, required from ten places, gives all ten the same functions. Fix the bug once and every caller is fixed. That's the entire point.

> The mental model that makes it click: a Script is a *worker* that does a job on its own. A ModuleScript is a *toolbox* that other workers open when they need a tool. The toolbox never walks around doing things by itself — it exists to be opened.

## What a ModuleScript actually is

Per Roblox's official documentation, a ModuleScript is a reusable script that runs once and returns exactly one value when it's first required. That value is almost always a **table** — a bundle of related functions and data — though it can technically be anything: a number, a function, a string. The one hard rule is that a ModuleScript **must return exactly one value**, and that return has to be the last thing it does.

Here's the skeleton every module follows:

\`\`\`lua
local MyModule = {}

-- add functions and values to the table here

return MyModule
\`\`\`

You create one the same way you create any script: in the Explorer, hover a container, click the **+**, and insert a **ModuleScript**. It shows up with a distinct icon and a default \`return\` statement already in place, because Roblox knows you'll forget it otherwise. Leave off that final \`return\` and every \`require()\` on the module errors out — that's the number-one beginner mistake with modules, and the error message ("Module code did not return exactly one value") tells you exactly what happened.

## Your first module: return one thing

Let's turn that copy-pasted number formatter into a proper module. Insert a ModuleScript into **ReplicatedStorage**, rename it \`NumberFormat\`, and write:

\`\`\`lua
-- ModuleScript: NumberFormat
local NumberFormat = {}

function NumberFormat.abbreviate(n)
	if n >= 1_000_000 then
		return string.format("%.1fM", n / 1_000_000)
	elseif n >= 1_000 then
		return string.format("%.1fK", n / 1_000)
	end
	return tostring(n)
end

return NumberFormat
\`\`\`

Two things to notice. First, functions get attached to the table with \`function NumberFormat.abbreviate(n)\` (or equivalently \`NumberFormat.abbreviate = function(n) ... end\`). Second, the very last line returns the table. Everything the module wants to expose lives on that table; anything you declare as a plain \`local\` above it stays private to the module. That's how you get clean, deliberate public-versus-private code without any special syntax — if it's on the returned table, callers can use it; if it's a local, it's yours alone.

## Requiring it from anywhere

Now any script — server or client — can use it. You call \`require()\` with a reference to the ModuleScript instance, and it hands you back that table:

\`\`\`lua
-- Any Script or LocalScript
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local NumberFormat = require(ReplicatedStorage:WaitForChild("NumberFormat"))

print(NumberFormat.abbreviate(1500))     -- "1.5K"
print(NumberFormat.abbreviate(2_400_000)) -- "2.4M"
\`\`\`

The pattern to internalize: \`require(<the ModuleScript instance>)\` returns whatever the module returned, and you stash it in a local named after the module. From there it's just a table — call its functions, read its values. On the client, reach the module with \`WaitForChild\` in case it hasn't replicated yet; on the server you can usually index it directly since server containers are ready before your scripts run.

That's genuinely the whole workflow: write once in a module, \`require\` it everywhere. The same [client-server split you handle with RemoteEvents](/blog/roblox/roblox-remote-events-guide) applies here too — a module in ReplicatedStorage is visible to both sides, which is exactly why it's the default home for shared code.

![The Roblox Studio Explorer, where a ModuleScript is placed under ReplicatedStorage so both client and server scripts can require it.](/images/blog/roblox/roblox-module-scripts-guide/roblox-studio-explorer.webp)

## The cache: the part everyone misreads

Here's the behavior that causes the most confusion, and it's worth reading twice. **A ModuleScript's code runs only the first time it's required. Every \`require()\` after that returns the exact same value from a cache — the module does not run again.**

That has a huge consequence: modules can hold *shared state*. Watch:

\`\`\`lua
-- ModuleScript: Counter
local Counter = {}
Counter.value = 0

function Counter.increment()
	Counter.value += 1
	return Counter.value
end

return Counter
\`\`\`

If Script A requires \`Counter\` and calls \`increment()\` three times, then Script B requires the same \`Counter\`, Script B sees \`value\` already at 3 — not 0. Both scripts got the *same table*, because the module ran once and both requires returned that one cached instance. This is incredibly useful (it's how you build shared services and managers), and it's a trap if you assumed each require gets a fresh copy. It does not. One module, one shared table, per environment.

### Once per environment: server and client are separate

Now the critical nuance, straight from the docs: that cache is **per Luau environment**, and the server and each client are *different* environments. Require \`Counter\` on the server and it runs once and lives in the server's cache. Require the same \`Counter\` on a client and it runs *again* — a completely independent copy with its own \`value\` — living in that client's cache. They do **not** share memory across the boundary.

This bites people who try to use a module as a communication channel: "I'll just set a value in the module on the server and read it on the client." Doesn't work. The server's copy and the client's copy are strangers. Sharing data across that line still requires [RemoteEvents](/blog/roblox/roblox-remote-events-guide), full stop — a module is a way to share code, not a way to smuggle state past the client-server boundary. Keep those two jobs separate in your head and a lot of confusing bugs disappear.

## Where to store modules

Where you put a module decides who can see it, and that's a security decision, not just an organizational one:

| Location | Who can require it | Use for |
| --- | --- | --- |
| **ReplicatedStorage** | Server and all clients | Shared code both sides need — formatters, config, constants |
| **ServerScriptService** | Server only | Server logic that must never reach a client |
| **ServerStorage** | Server only | Server-only modules and assets, kept out of replication |
| **StarterPlayerScripts** | That player's client | Client-only UI and input logic |

The rule that matters: **anything a client can require, an exploiter can read.** If a module in ReplicatedStorage contains your real shop prices, drop rates, or anti-cheat thresholds, assume a determined player has already read all of it. Sensitive logic — the code that decides whether a purchase is legitimate, what a boss actually drops — belongs in **ServerScriptService** or **ServerStorage** where clients can't touch it. This is the same "never trust the client" discipline that governs remotes; putting authoritative logic server-side is half of it, and the [DataStore saving guide](/blog/roblox/roblox-datastore-saving-guide) covers keeping the resulting state honest when you persist it.

![The Roblox Studio script editor, where a ModuleScript's table of functions and its final return statement are written in Luau.](/images/blog/roblox/roblox-module-scripts-guide/roblox-studio-editor.webp)

## The OOP pattern: .new() and metatables

Once modules click, you'll want to make *many* things of the same kind — a bunch of enemies, several pets, a weapon per player — each with its own data but the same behavior. That's object-oriented programming, and in Luau it's built on modules plus **metatables**. The standard pattern looks intimidating the first time and becomes muscle memory by the tenth:

\`\`\`lua
-- ModuleScript: Enemy
local Enemy = {}
Enemy.__index = Enemy

function Enemy.new(name, health)
	local self = setmetatable({}, Enemy)
	self.name = name
	self.health = health
	return self
end

function Enemy:takeDamage(amount)
	self.health -= amount
	if self.health <= 0 then
		print(self.name .. " died")
	end
end

return Enemy
\`\`\`

Then you spin up as many independent enemies as you want:

\`\`\`lua
local Enemy = require(game.ServerScriptService.Enemy)

local goblin = Enemy.new("Goblin", 50)
local ogre = Enemy.new("Ogre", 200)

goblin:takeDamage(60)  -- "Goblin died"
ogre:takeDamage(30)    -- ogre survives at 170
\`\`\`

What's happening: \`Enemy.new\` builds a fresh table for each enemy and uses \`setmetatable\` with \`Enemy.__index = Enemy\` so that when you call \`goblin:takeDamage(...)\`, Luau looks up \`takeDamage\` on the shared \`Enemy\` table. The colon (\`:\`) syntax passes the individual object in as \`self\` automatically, which is why each enemy tracks its *own* health while sharing *one* copy of the method code. That's the whole trick, and it's how most serious Roblox systems — inventories, status effects, tower-defense units — are structured. You don't need to master metatables to use modules, but the moment you want "many of a thing," this is the pattern.

## The traps: circular requires and shared state

Two failure modes cause almost all module pain. First, **circular requires.** If module A requires module B, and B requires A, Roblox can't resolve which runs first and throws an error about a module being required recursively. The fix is architectural, not syntactic: restructure so dependencies flow one direction. Pull the shared piece both need into a third module they each require, or pass the needed value in as an argument instead of requiring back. If you find A and B reaching into each other, that's a design smell telling you the responsibilities are tangled.

Second — and I'll say it again because it's the sneaky one — **shared state is per-environment and it persists.** Because a module runs once and caches, any state you store in it is shared across every script that requires it *on that side*, and it sticks around for the whole session. Great for a central manager; a nasty surprise if you expected fresh data each time. When you want a fresh instance every time, use the \`.new()\` pattern above; when you want one shared thing, store it on the module table directly. Deciding which you want *before* you write the module saves you from bugs that only show up once two systems touch the same module. If any of the underlying scripting still feels shaky, the [beginner's guide to Roblox](/blog/roblox/roblox-beginners-guide) and the [Lua scripting basics](/blog/roblox/roblox-scripting-lua-basics) fill in the foundation this all sits on.

## Quick Action Checklist

Turn your tangle of scripts into an organized, reusable codebase:

- [ ] Spot the copy-paste wall: any code you've pasted into a second script belongs in a **ModuleScript**
- [ ] Build the skeleton — \`local M = {}\`, add functions to \`M\`, \`return M\` as the **last line** (missing return = the classic error)
- [ ] Attach public functions to the returned table; keep helpers as plain \`local\`s to make them private
- [ ] Require it with \`require(theModuleScript)\`; on the client use \`WaitForChild\` in case it hasn't replicated
- [ ] Remember the cache: the module runs **once**, and every require gets the **same** value — modules hold shared state
- [ ] Remember the boundary: server and each client cache **separately** — modules share code, not state across the client-server line
- [ ] Store shared code in **ReplicatedStorage**; keep sensitive logic in **ServerScriptService** or **ServerStorage** where clients can't read it
- [ ] For "many of a thing," use the \`.new()\` + \`setmetatable\` OOP pattern so each object has its own data and shared methods
- [ ] Avoid circular requires — if A needs B and B needs A, refactor the shared piece into a third module`,
  faq: [
    {
      question: 'What is a ModuleScript in Roblox and how is it different from a Script?',
      answer:
        'A ModuleScript is a reusable script that does not run on its own — it holds code and returns exactly one value (almost always a table of functions) when another script calls require() on it. A regular Script or LocalScript runs automatically on its own, which is right for standalone logic like starting a round or spawning a boss. A ModuleScript is for shared logic you want to write once and use from many places. Think of a Script as a worker that does a job and a ModuleScript as a toolbox other workers open when they need a tool.',
    },
    {
      question: 'How does the require function work in Roblox?',
      answer:
        'You call require() with a reference to a ModuleScript instance, for example require(ReplicatedStorage.NumberFormat), and it returns whatever that module returned — usually a table you then call functions on. The first time a module is required, its code runs once and the return value is cached; every require after that returns the same cached value without running the module again. On the client, wrap the reference in WaitForChild so you do not require the module before it has replicated.',
    },
    {
      question: 'Does a ModuleScript run every time you require it?',
      answer:
        'No. A ModuleScript runs only the first time it is required in a given environment. After that, every require() returns the same cached value and the module code does not run again. This means any state stored on the module table is shared across all scripts that require it on that side, which is useful for central managers but surprising if you expected a fresh copy each time. When you want a fresh independent object every time, use a .new() constructor function inside the module instead of relying on the module table itself.',
    },
    {
      question: 'Do the server and client share the same ModuleScript state?',
      answer:
        'No. The require cache is per Luau environment, and the server and each client are separate environments. If you require the same module on the server and on a client, it runs once on each side and produces two independent copies with independent state — they do not share memory. That is why you cannot use a module as a way to pass data across the client-server boundary; a module shares code, not state. To move data between server and client you still need RemoteEvents or RemoteFunctions.',
    },
    {
      question: 'Where should I store ModuleScripts in Roblox?',
      answer:
        'Put shared code that both the server and clients need in ReplicatedStorage. Put server-only logic in ServerScriptService or ServerStorage, and client-only logic in places like StarterPlayerScripts. The security rule that decides this: anything a client can require, an exploiter can read, so any module in ReplicatedStorage should be treated as public. Sensitive logic like real shop prices, drop rates, and purchase validation belongs in a server-only container where clients cannot access it.',
    },
    {
      question: 'Why does my ModuleScript say it did not return exactly one value?',
      answer:
        'Because a ModuleScript must end by returning exactly one value, and yours is not. The most common cause is a missing or misplaced return statement — the return has to be the last thing the module does, typically return MyModule at the very bottom. Other causes are returning nothing, or returning two values. Make sure the final line of the module returns your single table (or whatever single value the module exposes) and the error goes away.',
    },
    {
      question: 'What is the .new() pattern in Roblox ModuleScripts?',
      answer:
        'It is the standard way to do object-oriented programming in Luau when you need many independent objects of the same kind — several enemies, one pet per player, a weapon per slot. Inside the module you set ModuleName.__index = ModuleName, then write a constructor like ModuleName.new(...) that builds a fresh table with setmetatable({}, ModuleName) and returns it. Methods defined with colon syntax receive the individual object as self, so each object keeps its own data while sharing one copy of the method code. It is how most larger Roblox systems structure inventories, units, and status effects.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/roblox', anchor: 'Roblox coverage hub' },
    { href: '/blog/roblox/roblox-scripting-lua-basics', anchor: 'Roblox Lua scripting basics' },
    { href: '/blog/roblox/roblox-studio-basics', anchor: 'Roblox Studio basics' },
    { href: '/blog/roblox/roblox-remote-events-guide', anchor: 'Roblox RemoteEvents guide' },
    { href: '/blog/roblox/roblox-datastore-saving-guide', anchor: 'Roblox DataStore saving guide' },
    { href: '/blog/roblox/roblox-beginners-guide', anchor: "Beginner's guide to Roblox" },
  ],
  externalSources: [
    {
      url: 'https://create.roblox.com/docs/luau/scripts',
      title: 'Roblox Creator Documentation — Scripts and ModuleScripts (official)',
    },
    {
      url: 'https://create.roblox.com/docs/scripting/luau/type-checking',
      title: 'Roblox — Luau language reference (official)',
    },
  ],
  tldr:
    'A ModuleScript holds reusable code that other scripts pull in with require(), so you write logic once and use it everywhere instead of copy-pasting. A module must return exactly one value (usually a table), it runs only the first time it is required and then returns a cached value, and that cache is per environment — so the server and each client get separate, independent copies that do not share state across the boundary. Store shared code in ReplicatedStorage and sensitive logic in server-only containers, since anything a client can require an exploiter can read. For many objects of one kind, use the .new() plus setmetatable OOP pattern, and avoid circular requires.',
};
