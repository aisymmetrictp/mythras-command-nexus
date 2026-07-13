import type { BlogPost } from '../../blogTypes';

export const robloxUiDesignBasicsGuide: BlogPost = {
  slug: 'roblox-ui-design-basics-guide',
  game: 'roblox',
  category: 'game-guides',
  topicCluster: 'roblox-creation',
  tags: ['ui-design', 'gui', 'udim2', 'scripting', 'studio', 'developer'],
  title: 'Roblox UI Design Basics: ScreenGui, Frames & UDim2',
  metaDescription:
    'Build Roblox UI the right way: ScreenGui and StarterGui, Frames and buttons, UDim2 Scale vs Offset, AnchorPoint centering, and GUIs that scale on any screen.',
  excerpt:
    "Your game can have perfect scripts and still feel broken if the menu is squished off the edge of a phone screen. This is how Roblox UI actually works: ScreenGui containers, the four GuiObjects you'll use constantly, and the UDim2 + AnchorPoint combo that separates a clean interface from a pixel-nudged mess.",
  featuredImagePrompt:
    'A Roblox Studio view of a ScreenGui in the Explorer with Frame, TextLabel, TextButton and TextBox children, the 2D UI rendered in the viewport, and the Properties panel showing Position, Size, and AnchorPoint — clean developer-tool aesthetic',
  heroImage: '/images/blog/roblox/roblox-ui-design-basics-guide/screengui-example.webp',
  heroImageAlt:
    'An example Roblox ScreenGui with various GuiObject children, including a Frame, TextLabel, TextBox, and ImageButton, laid out on screen.',
  imageSources: [
    {
      src: '/images/blog/roblox/roblox-ui-design-basics-guide/screengui-example.webp',
      sourceUrl: 'https://create.roblox.com/docs/ui',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-ui-design-basics-guide/udim2-components.webp',
      sourceUrl: 'https://create.roblox.com/docs/ui/position-and-size',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-ui-design-basics-guide/scale-offset-positioning.webp',
      sourceUrl: 'https://create.roblox.com/docs/ui/position-and-size',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-ui-design-basics-guide/anchor-points.webp',
      sourceUrl: 'https://create.roblox.com/docs/ui/position-and-size',
      license: 'Roblox official documentation © Roblox Corporation',
    },
    {
      src: '/images/blog/roblox/roblox-ui-design-basics-guide/frame-example.webp',
      sourceUrl: 'https://create.roblox.com/docs/ui/frames',
      license: 'Roblox official documentation © Roblox Corporation',
    },
  ],
  publishDate: '2026-07-12T00:00:00.000Z',
  lastUpdated: '2026-07-12T00:00:00.000Z',
  primaryKeyword: 'roblox ui design',
  secondaryKeywords: [
    'roblox screengui',
    'roblox udim2',
    'roblox gui tutorial',
    'roblox anchorpoint',
    'roblox scale vs offset',
    'roblox textbutton',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-ui-is-the-part-beginners-fumble', label: 'Why UI is the part beginners fumble', level: 2 },
    { id: 'screengui-where-every-interface-lives', label: 'ScreenGui: where every interface lives', level: 2 },
    { id: 'startergui-vs-playergui-the-copy-you-actually-see', label: 'StarterGui vs PlayerGui: the copy you actually see', level: 3 },
    { id: 'the-four-guiobjects-youll-use-constantly', label: 'The four GuiObjects you\'ll use constantly', level: 2 },
    { id: 'udim2-scale-and-offset-and-why-it-matters', label: 'UDim2: Scale and Offset, and why it matters', level: 2 },
    { id: 'scale-for-responsive-offset-for-fixed', label: 'Scale for responsive, Offset for fixed', level: 3 },
    { id: 'anchorpoint-the-property-that-fixes-your-centering', label: 'AnchorPoint: the property that fixes your centering', level: 2 },
    { id: 'layering-with-zindex', label: 'Layering with ZIndex', level: 2 },
    { id: 'building-your-first-button-step-by-step', label: 'Building your first button, step by step', level: 2 },
    { id: 'making-it-work-on-every-screen', label: 'Making it work on every screen', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You can write flawless server code, nail your DataStore saves, and still ship a game that feels amateur the second a player on a phone opens your shop and the "Buy" button is halfway off the screen. UI is where a shocking number of otherwise-solid Roblox games fall apart — not because the concepts are hard, but because two properties (**UDim2** and **AnchorPoint**) work in a way that isn't obvious, and beginners fight them by nudging pixels until it "looks right" on their own monitor. It looks right on exactly one screen and broken on every other.

This guide fixes that. By the end you'll know where UI actually lives, the handful of objects you'll build everything from, and the positioning system that makes a menu land in the same spot on a phone, a tablet, and a 4K monitor without you touching it. If you've already got [Studio basics](/blog/roblox/roblox-studio-basics) down and can write a [first Luau script](/blog/roblox/roblox-scripting-lua-basics), you're ready.

![An example Roblox ScreenGui with a Frame, TextLabel, TextBox, and ImageButton laid out on screen.](/images/blog/roblox/roblox-ui-design-basics-guide/screengui-example.webp)

## Why UI is the part beginners fumble

Here's the trap. You insert a Frame, drag it to the middle of your screen in Studio, drag a button into the corner, and press Play. On your machine it's perfect. Then a friend opens it on their phone and the whole layout is shoved into the top-left, elements overlapping, half of it cut off. What happened?

You positioned everything in **pixels**, and pixels are not the same on every device. A layout tuned for a 1920-wide monitor means nothing on a 720-wide phone. Roblox gives you a system built specifically to solve this — you just have to use the *relative* half of it instead of the *absolute* half. Once that clicks, most UI pain disappears. So let's build the mental model in the right order: container first, objects second, positioning third.

## ScreenGui: where every interface lives

Every piece of on-screen 2D interface in a Roblox game lives inside a **ScreenGui**. Per the official docs, a ScreenGui is the "primary container of on-screen 2D user interface elements" — it's the storage object that holds your frames, labels, and buttons and draws them flat on the player's screen, on top of the 3D world.

The critical rule: a ScreenGui **only renders if it's parented to a player's PlayerGui**. You don't put it there directly. Instead you put it in **StarterGui**, and Roblox clones it into each player's PlayerGui when they join and their character first spawns. Think of StarterGui as the template and PlayerGui as the live copy each player is actually looking at.

There's a second container family worth knowing exists: **SurfaceGui** and **BillboardGui** hold UI that lives *in* the 3D world — a screen on a wall, a health bar floating over an enemy's head. Same GuiObjects inside, different container. For menus, HUDs, and shops, ScreenGui is what you want, so that's the focus here.

### StarterGui vs PlayerGui: the copy you actually see

This distinction causes real bugs, so pin it down now. When you build UI in Studio, you're editing **StarterGui** — the master template. At runtime, that gets copied into every player's **PlayerGui**. If you want to change a player's UI while the game is running from a script, you edit *their* PlayerGui copy, not StarterGui (editing StarterGui mid-game only affects players who *respawn* after the change).

One property that bites people: a ScreenGui's \`ResetOnSpawn\`. By default a ScreenGui resets — gets wiped and re-cloned from StarterGui — every time the player respawns. For a HUD that should persist across deaths (a coin counter, a quest tracker), set \`ResetOnSpawn\` to false so it survives respawns instead of flickering back to its starting state.

## The four GuiObjects you'll use constantly

Almost everything you build is one of four object types. The docs group them as frames, labels, buttons, and text input, and you'll reach for these constantly:

| Object | What it does |
| --- | --- |
| **Frame** | A container. Holds and groups other UI objects — move the frame, everything inside moves with it. Your panels, windows, and backgrounds. |
| **TextLabel / ImageLabel** | Display-only text or an image. No interaction — a title, a coin count, an icon. |
| **TextButton / ImageButton** | The interactive ones. Users click or tap them to trigger an action. |
| **TextBox** | Lets the player type input — a search bar, a name field, a chat entry. |

The workflow is almost always the same: a **Frame** is the panel, **labels** show information inside it, **buttons** let the player do something, and a **TextBox** collects any typing. You group related pieces into a Frame so they move and scale as a unit. Get comfortable nesting — a shop is a Frame (the window) holding more Frames (each item card) holding labels and buttons.

![A Roblox Frame acting as a container that groups other UI objects together.](/images/blog/roblox/roblox-ui-design-basics-guide/frame-example.webp)

## UDim2: Scale and Offset, and why it matters

Now the part that actually matters. Both **Position** and **Size** on every GuiObject are a special type called **UDim2**, and this is the single most important thing to understand about Roblox UI.

A UDim2 has two axes — X (horizontal) and Y (vertical) — and *each axis carries two numbers*: a **Scale** and an **Offset**. Straight from the docs: Scale values represent a percentage of the container's size along that axis, and Offset values represent a number of pixels, with the two added together. The constructor takes them in this order:

\`\`\`lua
-- UDim2.new(scaleX, offsetX, scaleY, offsetY)
frame.Position = UDim2.new(0.5, 0, 0.5, 0)   -- 50% across, 50% down, no pixel offset
frame.Size     = UDim2.new(0.4, 0, 0.3, 0)    -- 40% of parent wide, 30% tall
\`\`\`

Read \`UDim2.new(0.5, 0, 0.5, 0)\` as: "put me at 50% of the parent's width plus 0 pixels, and 50% of the parent's height plus 0 pixels." Because it's a *percentage of the parent*, that position stays at the middle whether the parent is a phone screen or a monitor. That's the whole trick. There are two shorthand constructors worth knowing: \`UDim2.fromScale(0.5, 0.5)\` for pure percentage, and \`UDim2.fromOffset(200, 100)\` for pure pixels.

![A diagram of a UDim2 broken into its Scale and Offset components for the X and Y axes.](/images/blog/roblox/roblox-ui-design-basics-guide/udim2-components.webp)

### Scale for responsive, Offset for fixed

So when do you use which? Simple heuristic:

- **Scale** (the 0-to-1 percentage) is your default for anything that should adapt to screen size — position of a menu, size of a panel, spacing that should feel proportional. This is what keeps your UI usable across devices.
- **Offset** (pixels) is for things that should stay a *constant real-world size* no matter the screen — a 2-pixel border, a fixed 4-pixel gap, a small icon you never want to shrink.

The beginner mistake is building an entire layout in Offset because dragging things in Studio quietly writes pixel values. Then it only works on your monitor. Flip your instinct: reach for Scale first, drop to Offset only for the little fixed details. You can mix them on the same axis — \`UDim2.new(0.5, 10, 0, 0)\` means "halfway across, then nudge 10 pixels right" — which is handy for fine adjustments on top of a responsive base.

![A comparison showing Scale-based versus Offset-based positioning of a UI element inside its parent.](/images/blog/roblox/roblox-ui-design-basics-guide/scale-offset-positioning.webp)

## AnchorPoint: the property that fixes your centering

Here's the puzzle that stumps everyone once: you set a Frame's Position to \`UDim2.fromScale(0.5, 0.5)\` expecting it dead-center, and instead its *top-left corner* sits at the center, so the whole box hangs down and to the right. Frustrating, and the fix is one property.

**AnchorPoint** defines the origin point *on the object itself* that Position and Size are measured from. It's a Vector2 with values from 0 to 1, relative to the object's own size. The default is \`(0, 0)\` — the top-left corner — which is exactly why your "centered" frame isn't centered. Set AnchorPoint to \`(0.5, 0.5)\` and now the object's *middle* is the origin point:

\`\`\`lua
frame.AnchorPoint = Vector2.new(0.5, 0.5)      -- origin is the frame's own center
frame.Position    = UDim2.fromScale(0.5, 0.5)  -- now genuinely centered
\`\`\`

The rule of thumb: **the AnchorPoint value and the Scale position should usually match** for clean alignment. Pinning something to the bottom-right corner of the screen? AnchorPoint \`(1, 1)\`, Position \`UDim2.fromScale(1, 1)\`. Top-right HUD element? AnchorPoint \`(1, 0)\`, Position \`UDim2.fromScale(1, 0)\`. Match the anchor to the corner you're pinning to and elements stop drifting off-screen at the edges.

![A grid illustrating Roblox AnchorPoint values from (0,0) top-left to (1,1) bottom-right.](/images/blog/roblox/roblox-ui-design-basics-guide/anchor-points.webp)

## Layering with ZIndex

When two GuiObjects overlap, which one wins? **ZIndex** decides the render order. Higher ZIndex draws on top of lower. By default, the ZIndexBehavior on a container like ScreenGui renders children above their parents, and each child's ZIndex sorts it against its siblings.

You'll care about this the moment you build a popup. A confirmation dialog needs to sit *above* the rest of the HUD, so you bump its ZIndex up so nothing behind it bleeds through. A dimmed background overlay behind the popup gets a ZIndex between the HUD and the dialog. Most of the time you can ignore ZIndex entirely and let sibling order handle it — but when something is stubbornly rendering behind something else, ZIndex is the first property to check.

## Building your first button, step by step

Enough theory — build a working button. In the Explorer:

1. Insert a **ScreenGui** into **StarterGui** (hover StarterGui, click the **+**).
2. Insert a **TextButton** into that ScreenGui.
3. Select the button and, in Properties, set **AnchorPoint** to \`0.5, 0.5\` and **Position** to \`{0.5, 0}, {0.5, 0}\` (that's Studio's notation for Scale 0.5 / Offset 0 on each axis). It's now centered.
4. Set **Size** to something like \`{0.2, 0}, {0.08, 0}\` — 20% of the screen wide, 8% tall — and type a label into the **Text** property.

Now make it *do* something. Insert a **LocalScript** into the TextButton and use the \`Activated\` event, which fires whether the player clicks with a mouse or taps on a touchscreen — one handler covers every platform:

\`\`\`lua
local button = script.Parent  -- the TextButton this LocalScript lives in

button.Activated:Connect(function()
	print("Button was pressed!")
	button.Text = "Clicked!"
end)
\`\`\`

Press Play and click it — the output prints and the label changes. That's the entire loop: build the object in StarterGui, position it with Scale + AnchorPoint, and wire behavior with \`Activated\`. When that button needs to affect the *actual game* — grant an item, spend currency, open a door — it can't just do it locally, because a LocalScript can't be trusted with real game state. That's where a [RemoteEvent](/blog/roblox/roblox-remote-events-guide) carries the request to the server, and the server validates it. UI is the front door; the server is the bouncer.

## Making it work on every screen

Scale and AnchorPoint get you most of the way, but a few extra tools finish the job of a genuinely responsive interface:

- **Layout objects.** Instead of hand-placing every item, drop a \`UIListLayout\` or \`UIGridLayout\` into a Frame and it arranges the children for you automatically — perfect for inventory grids and menus where the item count changes.
- **Constraints.** A \`UIAspectRatioConstraint\` locks a Frame to a fixed width-to-height ratio so it doesn't stretch into a weird rectangle on ultra-wide screens. A \`UITextSizeConstraint\` keeps text from ballooning or vanishing.
- **TextScaled.** Set a TextLabel or TextButton's \`TextScaled\` to true and the text auto-sizes to fill its box — far more reliable across devices than a hardcoded font size.
- **Polish objects.** \`UICorner\` rounds corners, \`UIStroke\` adds an outline, \`UIPadding\` adds internal spacing. Small touches, big difference in whether your UI looks intentional.

Test on more than your monitor. Studio's Device Emulator (the phone icon in the toolbar) lets you preview your layout as a phone or tablet without leaving Studio — flip through a couple of device presets before you ship and you'll catch the off-screen-button disasters before your players do.

From here, UI is just repetition and taste. Once you can place a responsive panel and wire a button, you can build a full shop, an inventory, a settings menu — the pieces are identical, just more of them. If you're assembling a whole game around this, the [how-to-make-a-Roblox-game walkthrough](/blog/roblox/how-to-make-a-roblox-game) shows where UI fits in the bigger build, and a shop UI naturally leads into [game passes and developer products](/blog/roblox/roblox-game-passes-developer-products-guide) once you're ready to sell something. New to the platform overall? The [beginner's guide to Roblox](/blog/roblox/roblox-beginners-guide) covers the ground underneath all of this.

## Quick Action Checklist

Ship UI that works on every device instead of just your monitor:

- [ ] Put every on-screen interface inside a **ScreenGui**, and parent that ScreenGui to **StarterGui** so it clones into each player's PlayerGui
- [ ] For a HUD that should survive death, set the ScreenGui's \`ResetOnSpawn\` to **false**
- [ ] Build from the four basics: **Frame** (container), **label** (display), **button** (action), **TextBox** (input) — nest related pieces in Frames
- [ ] Position and size with **UDim2** — default to **Scale** (percentage of parent) so layouts adapt; use **Offset** (pixels) only for fixed details like borders
- [ ] Fix centering with **AnchorPoint** — set it to \`(0.5, 0.5)\` and match the anchor value to whatever corner you're pinning to
- [ ] Use **ZIndex** to push popups and dialogs above the rest of the UI
- [ ] Wire buttons with the \`Activated\` event so one handler works for both mouse and touch
- [ ] Route any button that changes real game state through a **RemoteEvent** to a server that validates it
- [ ] Add \`UIListLayout\`/\`UIGridLayout\`, \`UIAspectRatioConstraint\`, and \`TextScaled\` for responsiveness, then preview in the **Device Emulator** before shipping`,
  faq: [
    {
      question: 'What is a ScreenGui in Roblox and where do I put it?',
      answer:
        'A ScreenGui is the primary container for on-screen 2D user interface in Roblox — it holds your frames, labels, buttons, and text boxes and draws them flat on the player\'s screen over the 3D world. A ScreenGui only renders when it is inside a player\'s PlayerGui, but you do not place it there directly. You put it in StarterGui, and Roblox automatically clones it into each player\'s PlayerGui when they join and their character first spawns. StarterGui is the master template; PlayerGui is the live copy each player actually sees.',
    },
    {
      question: 'What is UDim2 in Roblox UI?',
      answer:
        'UDim2 is the data type used for a GuiObject\'s Position and Size. It covers two axes, X and Y, and each axis has two numbers: Scale and Offset. Scale is a percentage of the parent container\'s size along that axis (0 to 1), and Offset is a fixed number of pixels, and the two are added together. The constructor order is UDim2.new(scaleX, offsetX, scaleY, offsetY). Use Scale for anything that should adapt to different screen sizes and Offset for details that should stay a constant pixel size, like a thin border.',
    },
    {
      question: 'Why is my Roblox UI not centered even though I set Position to 0.5, 0.5?',
      answer:
        'Because of AnchorPoint. By default a GuiObject\'s AnchorPoint is (0, 0), its top-left corner, so a Position of 0.5, 0.5 places the top-left corner at the center of the parent, leaving the box hanging down and to the right. AnchorPoint defines which point on the object itself is used as the origin for Position and Size, as a fraction from 0 to 1 of the object\'s own size. Set AnchorPoint to (0.5, 0.5) so the object\'s center becomes the origin, and it will actually center. As a rule, match the AnchorPoint value to the corner you are pinning to.',
    },
    {
      question: 'What is the difference between Scale and Offset in Roblox?',
      answer:
        'Scale and Offset are the two components of each axis in a UDim2. Scale is a percentage of the parent container\'s size, so a Scale of 0.5 always means half the parent regardless of screen size, which makes it ideal for responsive layouts. Offset is a fixed number of pixels, so it stays the same real-world size on every device, which suits borders, small gaps, and icons you never want to resize. The common beginner mistake is building an entire layout in Offset — which only looks right on one screen — instead of leaning on Scale.',
    },
    {
      question: 'How do I make a Roblox button run code when clicked?',
      answer:
        'Insert a TextButton or ImageButton into a ScreenGui, then add a LocalScript inside the button and connect to its Activated event. Activated fires when the button is clicked with a mouse or tapped on a touchscreen, so a single handler works across every platform. For example: button.Activated:Connect(function() print("pressed") end). If the button needs to change real game state such as granting an item or spending currency, do not do it in the LocalScript — send the request to the server through a RemoteEvent and validate it there, because the client cannot be trusted with authoritative game state.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/roblox', anchor: 'Roblox coverage hub' },
    { href: '/blog/roblox/roblox-studio-basics', anchor: 'Roblox Studio basics' },
    { href: '/blog/roblox/roblox-scripting-lua-basics', anchor: 'Roblox Lua scripting basics' },
    { href: '/blog/roblox/roblox-remote-events-guide', anchor: 'Roblox RemoteEvents guide' },
    { href: '/blog/roblox/how-to-make-a-roblox-game', anchor: 'How to make a Roblox game' },
    { href: '/blog/roblox/roblox-game-passes-developer-products-guide', anchor: 'Roblox game passes & developer products' },
  ],
  externalSources: [
    {
      url: 'https://create.roblox.com/docs/ui',
      title: 'Roblox Creator Documentation — User Interface overview (official)',
    },
    {
      url: 'https://create.roblox.com/docs/ui/position-and-size',
      title: 'Roblox Creator Documentation — Position and Size (UDim2, AnchorPoint)',
    },
    {
      url: 'https://create.roblox.com/docs/reference/engine/classes/ScreenGui',
      title: 'Roblox Engine Reference — ScreenGui class (official)',
    },
  ],
  tldr:
    'All on-screen Roblox UI lives inside a ScreenGui, which you parent to StarterGui so it clones into each player\'s PlayerGui. Build from four objects — Frame, label, button, and TextBox — and position everything with UDim2, defaulting to Scale (a percentage of the parent) so layouts adapt across devices, with Offset pixels reserved for fixed details. Set AnchorPoint to match the corner you pin to (0.5, 0.5 for centered) to fix the classic off-center bug, wire buttons with the Activated event, and route any state-changing button through a validated RemoteEvent.',
};
