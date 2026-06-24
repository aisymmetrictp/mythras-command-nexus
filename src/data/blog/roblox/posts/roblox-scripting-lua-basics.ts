import type { BlogPost } from '../../blogTypes';

export const robloxScriptingLuaBasics: BlogPost = {
  slug: 'roblox-scripting-lua-basics',
  game: 'roblox',
  category: 'game-guides',
  topicCluster: 'roblox-creation',
  tags: ['scripting', 'luau', 'beginner', 'studio', 'coding'],
  title: 'Roblox Lua Scripting Basics (Luau for Beginners)',
  metaDescription:
    'Learn Roblox scripting from zero. A beginner Luau tutorial — the Explorer, Scripts vs LocalScripts, variables, events, and your first working scripts in Studio.',
  excerpt:
    "Placing parts in Roblox Studio gets you a static diorama. Scripting is what makes things happen — doors open, bricks kill, leaderboards count. This is the no-fluff intro to Luau: the Explorer, the script types, variables, events, and a handful of first scripts that actually do something.",
  featuredImagePrompt:
    'A clean view of the Roblox Studio script editor — Luau code on screen, the Explorer panel with a Script object highlighted, the Output window showing a printed line, developer-tool aesthetic',
  heroImage: '/images/blog/roblox/roblox-scripting-lua-basics/roblox-studio-interface.webp',
  heroImageAlt:
    'The Roblox Studio interface where Luau scripts are written, showing the 3D viewport, the Explorer tree, and the side panels used for scripting.',
  imageSources: [
    {
      src: '/images/blog/roblox/roblox-scripting-lua-basics/roblox-studio-interface.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/roblox/roblox-scripting-lua-basics/roblox-studio-start-screen.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/roblox/roblox-scripting-lua-basics/roblox-studio-script-editor.webp',
      sourceUrl: 'https://roblox.fandom.com/wiki/Roblox_Studio',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',
  primaryKeyword: 'roblox lua scripting basics',
  secondaryKeywords: [
    'roblox scripting for beginners',
    'how to script in roblox studio',
    'roblox luau tutorial',
    'roblox scripting tutorial',
    'learn roblox scripting',
    'first roblox script',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'lua-luau-and-why-it-matters', label: 'Lua, Luau, and why it matters', level: 2 },
    { id: 'where-scripts-live-the-explorer', label: 'Where scripts live: the Explorer', level: 2 },
    { id: 'the-three-script-types-you-must-know', label: 'The three script types you must know', level: 2 },
    { id: 'your-first-script-hello-world', label: 'Your first script: Hello world', level: 2 },
    { id: 'variables-the-thing-everything-uses', label: 'Variables: the thing everything uses', level: 2 },
    { id: 'events-the-when-x-happens-do-y-pattern', label: 'Events: the \'when X happens, do Y\' pattern', level: 2 },
    { id: 'three-beginner-scripts-worth-stealing', label: 'Three beginner scripts worth stealing', level: 2 },
    { id: 'how-to-actually-get-good', label: 'How to actually get good', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Placing parts in Roblox Studio gets you a really nice diorama. A floor, some walls, a glowing platform — and absolutely nothing happens when a player shows up. Scripting is the difference between a static model and a game: it's what makes the door open, the brick kill, the leaderboard count, the shop button charge you. If you've already done the [Studio basics](/blog/roblox/roblox-studio-basics) and built something out of parts, this is the next step — the one that actually makes the thing playable.

Here's the good news up front: you do not need to learn an entire programming language before you can build a working mechanic. You need a handful of concepts — where scripts live, the difference between the script types, variables, and events — and one pattern that powers most of what games do. This guide hands you exactly that, plus three real scripts you can paste in and watch work. No prior coding required.

![The Roblox Studio interface where Luau scripts are written, showing the 3D viewport, the Explorer tree, and the side panels.](/images/blog/roblox/roblox-scripting-lua-basics/roblox-studio-interface.webp)

## Lua, Luau, and why it matters

Roblox games are scripted in **Luau** (pronounced "loo-ow"), which is Roblox's own dialect of the **Lua** programming language. Lua is a small, fast, beginner-friendly scripting language that's been used in games for decades; Luau is Roblox's fork of it, extended with things like optional type checking, performance optimizations, and clearer error messages tuned for game development.

For your purposes as a beginner, here's all you need to internalize: when a tutorial says "Lua" and when it says "Luau," they're talking about effectively the same thing in a Roblox context — the language you write in the Studio script editor. Luau is just the modern, Roblox-flavored version. It's genuinely one of the gentler languages to start with: no semicolons to forget, readable keywords, and forgiving syntax. If this is your first time writing any code at all, you picked a friendly place to begin.

> Don't try to "learn Luau" as a goal. That's like trying to "learn English" before saying a sentence. You learn it by building one mechanic, then another. Every concept below exists in service of making something happen in your game — keep that framing and it'll stick far faster.

## Where scripts live: the Explorer

Everything in a Roblox game — every part, model, light, and script — lives in a tree called the **Explorer**. If you can't see it, turn it on from the **View** tab in Studio. The Explorer is your map of the game: it shows every object that exists and how they're nested inside each other.

A few containers matter for scripting:

- **Workspace** — holds everything physically in the 3D world: parts, models, the baseplate. A script that affects a specific part usually lives inside that part, here.
- **ServerScriptService** — the standard home for game-logic scripts that should run on the server (more on server vs client in a second). This is where most "real" gameplay scripts belong.
- **StarterPlayer / StarterGui** — these feed scripts and UI to each player when they join. Client-side scripts that control a player's screen or input live in these areas.

To add a script, you right-click an object or a service in the Explorer, choose **Insert Object**, and pick the script type you want. The script becomes a child of whatever you inserted it into, and *where* you put it affects what it can reach. A script inside a part can easily refer to that part as its parent; a script in ServerScriptService reaches into the game from the top down. Getting comfortable reading and navigating the Explorer tree is half of scripting, honestly — it's how you find and reference everything.

## The three script types you must know

This trips up every beginner, so get it straight early. Roblox has three script object types, and using the wrong one is the most common reason a script "doesn't work."

| Type | Runs on | Use it for |
| --- | --- | --- |
| **Script** | The server | Core game logic — scoring, spawning, anything all players share |
| **LocalScript** | A single player's client | Things only one player sees or controls — UI, camera, input |
| **ModuleScript** | Nothing on its own | Reusable code other scripts load and share |

The server-versus-client split is the key idea. A **Script** runs on the server — the authoritative machine Roblox runs your game on — so it controls things every player needs to agree on, like who has how many points or where an enemy spawns. A **LocalScript** runs on one player's own device, so it handles things personal to that player: their on-screen interface, their camera, their keyboard input. Put a UI script on the server and it won't work; put scoring logic in a LocalScript and players can cheat it.

A **ModuleScript** is different — it doesn't run by itself at all. It's a container for reusable code (a function, a table of data) that other Scripts and LocalScripts can load with \`require\` and share, so you don't copy-paste the same logic five times. You won't need ModuleScripts on day one, but know they exist so the term doesn't confuse you later. For your first scripts, you'll almost always want a plain **Script**.

![The Roblox Studio start screen, where you create a new place to begin building and scripting.](/images/blog/roblox/roblox-scripting-lua-basics/roblox-studio-start-screen.webp)

## Your first script: Hello world

Let's actually run code. In the Explorer, right-click **Workspace**, choose **Insert Object**, then **Script**. The script editor opens with a default line already in it. Replace it with:

\`\`\`lua
print("Hello from my first script!")
\`\`\`

Now press **Play** (the blue play button on the Home tab). Studio runs your game, and down in the **Output** window (turn it on from the View tab if it's hidden) you'll see your message printed. That's it — you just executed code in a game.

![The Roblox Studio desktop application, where the script editor and Output window live alongside the 3D viewport.](/images/blog/roblox/roblox-scripting-lua-basics/roblox-studio-script-editor.webp)

\`print()\` is the function you'll lean on constantly. It writes text to the Output window, and it's how you check whether your code is reaching a certain point and what your values actually are. Ninety percent of beginner debugging is sticking \`print()\` calls in to confirm "did this line run?" and "what is this number right now?" When something breaks later, the Output window also prints errors in red with a line number telling you where it went wrong. Reading those errors instead of panicking is the single most valuable habit you can build.

## Variables: the thing everything uses

A **variable** is a named box that holds a value. You make one with \`local\`, give it a name, and assign it something:

\`\`\`lua
local playerName = "Mythras"
local startingCoins = 100
local isGameOver = false
\`\`\`

Those three cover the value types you'll use most: text (a "string"), numbers, and true/false (a "boolean"). The \`local\` keyword means the variable only exists inside its script, which is what you want almost always — it keeps things tidy and fast.

The genuinely useful kind of variable in Roblox holds a *reference to an object* in your game. This is how a script grabs a part to do something to it:

\`\`\`lua
local part = script.Parent
\`\`\`

\`script.Parent\` means "the object this script is inside of." So if you put a script inside a part, that one line gives you a handle on the part, and now you can change it:

\`\`\`lua
local part = script.Parent
part.BrickColor = BrickColor.new("Bright red")
part.Transparency = 0.5
\`\`\`

That's the whole loop of scripting in miniature: get a reference to something (a variable), then read or change its properties — the same properties you can see and tweak in the **Properties** panel. Everything you can set by hand in Properties, you can set in code, which is what makes scripts powerful.

## Events: the 'when X happens, do Y' pattern

Here's the one pattern that powers most of what games do. An **event** is a signal that fires when something happens — a player touches a part, a player joins the game, a button is clicked. You connect a **function** (a reusable block of instructions) to an event, and Roblox runs your function every time the event fires. The shape is always: *when this happens, do this.*

The classic example is the \`Touched\` event, which fires when something bumps into a part. Put a script inside a part and write:

\`\`\`lua
local part = script.Parent

local function onTouch(otherPart)
	print("Something touched me: " .. otherPart.Name)
end

part.Touched:Connect(onTouch)
\`\`\`

Read it top to bottom: grab the part, define a function \`onTouch\` that prints what hit it, then \`Connect\` that function to the part's \`Touched\` event. Now anything that touches the part — including a walking player — triggers your function. That \`:Connect()\` call is the glue, and you'll use it constantly.

Two more events you'll meet immediately. \`game.Players.PlayerAdded\` fires whenever a player joins the server — the standard place to set up anything per-player, like a leaderboard stat:

\`\`\`lua
game.Players.PlayerAdded:Connect(function(player)
	print(player.Name .. " joined the game!")
end)
\`\`\`

And UI buttons have a \`MouseButton1Click\` event for when they're clicked. Different trigger, identical pattern: connect a function, do something when it fires. Once *when X happens, do Y* clicks for you, you can reason about most game mechanics, because that's all they are underneath.

## Three beginner scripts worth stealing

Theory's fine, but you learn by running things. Here are three small, complete scripts that each do something real. Insert a **Script** where noted and paste.

**1. A kill-brick (the obby staple).** Put this in a part; touching it resets the player.

\`\`\`lua
local part = script.Parent

part.Touched:Connect(function(hit)
	local humanoid = hit.Parent:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
		humanoid.Health = 0
	end
end)
\`\`\`

The \`if humanoid then\` check matters: \`Touched\` fires for *anything*, so you confirm what hit it actually has a Humanoid (the object that makes a character alive) before you try to hurt it. Setting Health to 0 kills the character.

**2. A color-changing part.** Put this in a part for a cheap but satisfying effect — it cycles color every second.

\`\`\`lua
local part = script.Parent

while true do
	part.BrickColor = BrickColor.random()
	task.wait(1)
end
\`\`\`

\`while true do\` is a loop that runs forever; \`task.wait(1)\` pauses one second each pass so it doesn't run instantly and crash. This introduces loops and waiting, both of which you'll use endlessly.

**3. A simple leaderboard stat.** Put this in **ServerScriptService** to give every player a "Coins" value that shows on the in-game leaderboard.

\`\`\`lua
game.Players.PlayerAdded:Connect(function(player)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	leaderstats.Parent = player

	local coins = Instance.new("IntValue")
	coins.Name = "Coins"
	coins.Value = 0
	coins.Parent = leaderstats
end)
\`\`\`

Roblox automatically shows anything inside a folder named exactly \`leaderstats\` on the player list. \`Instance.new()\` creates a new object in code — here a Folder and an IntValue (a whole-number container) — and parenting it to the player wires it up. This one script gives you a working scoreboard, and it shows the create-and-parent pattern you'll reuse for tons of systems.

## How to actually get good

The trap beginners fall into is trying to read the whole Luau documentation before building anything. Don't. The fast path is the opposite:

- **Build one mechanic at a time.** Need a door? Learn the touch/click pattern and the open-the-door bit, ship it, move on. You'll absorb the language as a side effect of making things.
- **Test constantly and read the Output.** Press Play after every few lines. Use \`print()\` to check your values. When you hit a red error, read the line number — it's almost always telling you exactly what's wrong.
- **Steal and modify.** Every script above is a starting point. Change the color, change the wait time, change what touching it does. Tweaking working code teaches you faster than writing from a blank page.
- **Use the real docs when you're stuck.** Roblox's official Creator Documentation has the full Luau reference and beginner tutorials. Reach for it to look up a specific thing, not to read cover to cover.

The developers behind the platform's biggest games all started exactly here — a kill-brick, a leaderboard, a script that didn't work the first three times. The only difference between you and them is reps. Go get them.

## Quick Action Checklist

Your first scripting session, start to finish:

- [ ] Open Roblox Studio and turn on the Explorer, Properties, and Output panels from the View tab
- [ ] Insert a Script into Workspace and run a \`print()\` to confirm code works
- [ ] Learn the difference: Script (server logic), LocalScript (one player's client), ModuleScript (shared reusable code)
- [ ] Make a variable with \`local\`, including \`local part = script.Parent\` to grab an object
- [ ] Change a part's properties in code (BrickColor, Transparency) the same way you would in Properties
- [ ] Connect a function to an event with \`:Connect()\` — start with \`Touched\`
- [ ] Paste in the kill-brick, color-cycler, and leaderboard scripts and watch them work
- [ ] Test with Play after every few lines and read the Output window for red errors
- [ ] Build one small mechanic, modify it, then learn the next — don't try to learn all of Luau first`,
  faq: [
    {
      question: 'Does Roblox use Lua or Luau?',
      answer:
        'Both terms refer to effectively the same thing in a Roblox context. Roblox scripts are written in Luau, which is Roblox\'s own dialect of the Lua programming language. Luau extends Lua with optional type checking, performance optimizations, and clearer error messages tuned for game development. When tutorials say "Lua scripting in Roblox," they mean Luau — it is just the modern, Roblox-flavored version of Lua you write in the Studio script editor.',
    },
    {
      question: 'What is the difference between a Script and a LocalScript in Roblox?',
      answer:
        'A Script runs on the server — the authoritative machine Roblox runs your game on — so it handles logic every player must agree on, like scoring or enemy spawning. A LocalScript runs on a single player\'s own device, so it handles things personal to that player, like their on-screen UI, camera, and input. Using the wrong type is the most common reason a beginner script does not work: UI logic needs a LocalScript, while shared game logic needs a Script. A third type, ModuleScript, holds reusable code that other scripts load and does not run on its own.',
    },
    {
      question: 'How do I write my first Roblox script?',
      answer:
        'In Studio, open the Explorer (View tab), right-click Workspace, choose Insert Object, then Script. The script editor opens with a default line. Replace it with print("Hello from my first script!") and press Play. Your message appears in the Output window. That print() function is what you use to write text to Output and check what your code is doing — it is the foundation of beginner debugging.',
    },
    {
      question: 'What is an event in Roblox scripting?',
      answer:
        'An event is a signal that fires when something happens in your game — a player touches a part (the Touched event), a player joins (game.Players.PlayerAdded), or a UI button is clicked (MouseButton1Click). You connect a function to an event using :Connect(), and Roblox runs that function every time the event fires. This "when X happens, do Y" pattern is the backbone of nearly every game mechanic, from a kill-brick to a shop button. Learn it once and you can reason about most of what other games are doing.',
    },
    {
      question: 'Do I need coding experience to script in Roblox?',
      answer:
        'No. Luau is one of the gentler languages to start with — no semicolons to forget, readable keywords, and forgiving syntax — and Roblox Studio is free. You do not need to learn the whole language before building. The fast path is to learn one mechanic at a time: get a kill-brick working, then a leaderboard, then the next thing. You absorb the language as a side effect of making things, testing constantly, and reading the error messages in the Output window.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/roblox', anchor: 'Roblox coverage hub' },
    { href: '/blog/roblox/roblox-studio-basics', anchor: 'Roblox Studio basics' },
    { href: '/blog/roblox/how-to-make-a-roblox-game', anchor: 'How to make a Roblox game' },
    { href: '/blog/roblox/roblox-beginners-guide', anchor: "Beginner's guide to Roblox" },
    { href: '/blog/roblox/best-roblox-games', anchor: 'Best Roblox games to play' },
  ],
  externalSources: [
    {
      url: 'https://create.roblox.com/docs',
      title: 'Roblox Creator Documentation — official Studio and Luau guides',
    },
    {
      url: 'https://create.roblox.com/docs/luau',
      title: 'Roblox — official Luau language documentation',
    },
    {
      url: 'https://luau.org/',
      title: 'Luau — the official language site',
    },
  ],
  tldr:
    'A beginner intro to Roblox scripting in Luau (Roblox\'s Lua dialect). Scripts live in the Explorer tree; the three types are Script (server logic), LocalScript (one player\'s client), and ModuleScript (shared reusable code). The essentials are variables (local x = ...), object references (script.Parent), and events connected with :Connect() — the "when X happens, do Y" pattern behind most mechanics. Start with a print(), then build a kill-brick, a color-cycler, and a leaderboard, testing constantly in the Output window.',
};
