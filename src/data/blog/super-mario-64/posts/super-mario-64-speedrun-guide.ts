import type { BlogPost } from '../../blogTypes';

export const superMario64SpeedrunGuide: BlogPost = {
  slug: 'super-mario-64-speedrun-guide',
  game: 'super-mario-64',
  category: 'advanced-strategy',
  topicCluster: 'mario64-speedrun',
  tags: ['speedrun', '16-star', '70-star', '120-star', 'n64'],
  title: 'Super Mario 64 Speedrun Guide: Beginner Routes and Tech',
  metaDescription:
    'Start speedrunning Super Mario 64: which category to pick (16-star vs 70-star vs 120-star), the beginner-friendly route, the tech you actually need, and timing rules.',
  excerpt:
    'Super Mario 64 is the most-run game on the internet for a reason: the routes are readable and the first hour of practice pays off fast. Here is how to pick a category, which stars to grab and in what order, and the small handful of tricks that actually move your time.',
  featuredImagePrompt:
    'Peach\'s Castle exterior in Super Mario 64 at the start of a run, Mario standing on the bridge, N64 rendering style',
  heroImage: '/images/blog/super-mario-64/super-mario-64-speedrun-guide/peachs-castle.webp',
  heroImageAlt:
    'The exterior of Peach\'s Castle in Super Mario 64, where every run starts and the timer begins on file select.',
  imageSources: [
    {
      src: '/images/blog/super-mario-64/super-mario-64-speedrun-guide/peachs-castle.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/0/01/Peach_Castle_in_Super_Mario_64.png',
      license: 'Super Mario Wiki',
    },
    {
      src: '/images/blog/super-mario-64/super-mario-64-speedrun-guide/bob-omb-battlefield.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/6/65/SM64_Screenshot_Bob-omb_Battlefield.png',
      license: 'Super Mario Wiki',
    },
    {
      src: '/images/blog/super-mario-64/super-mario-64-speedrun-guide/endless-stairs.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/8/8e/SM64_Notendless.png',
      license: 'Super Mario Wiki',
    },
    {
      src: '/images/blog/super-mario-64/super-mario-64-speedrun-guide/bowser-in-the-sky.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/c/ca/Bowser_in_the_Sky.png',
      license: 'Super Mario Wiki',
    },
  ],
  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',
  primaryKeyword: 'super mario 64 speedrun guide',
  secondaryKeywords: [
    'super mario 64 16 star route',
    'super mario 64 speedrun categories',
    'super mario 64 70 star',
    'super mario 64 120 star',
    'how to speedrun super mario 64',
    'super mario 64 beginner speedrun',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-most-beginner-friendly-speedgame-there-is', label: 'The most beginner-friendly speedgame there is', level: 2 },
    { id: 'pick-your-category-first', label: 'Pick your category first', level: 2 },
    { id: 'why-16-star-is-the-right-starting-line', label: 'Why 16-star is the right starting line', level: 2 },
    { id: 'the-beginner-16-star-route-in-plain-english', label: 'The beginner 16-star route in plain English', level: 2 },
    { id: 'the-tech-you-actually-need-day-one', label: 'The tech you actually need day one', level: 2 },
    { id: 'the-tech-you-can-skip-for-now', label: 'The tech you can skip for now', level: 2 },
    { id: 'timing-your-run-so-it-counts', label: 'Timing your run so it counts', level: 2 },
    { id: 'version-matters-more-than-you-think', label: 'Version matters more than you think', level: 2 },
    { id: 'where-70-and-120-star-go-from-here', label: 'Where 70 and 120-star go from here', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most games make you fight the engine to speedrun them. Super Mario 64 hands you the controller and gets out of the way. The moveset is expressive, the levels are open, and the routes are legible enough that you can watch a world record, understand roughly what happened, and go replicate a chunk of it the same night. That is why it has been one of the most-run games on the internet for over a decade and why it is the game I point new speedrunners at first.

This is the on-ramp: how to pick a category, the beginner star route that gets you a real completed time, the tech that matters on day one, and the timing rules that decide whether your run actually counts.

Everything here targets the **Nintendo 64 original**. That is not gatekeeping — as you will see, the version you run on literally changes which categories are possible.

## The most beginner-friendly speedgame there is

Two things make Super Mario 64 forgiving to start with. First, **you do not need a single frame-perfect trick to finish a run.** You can complete a legitimate 16-star or 70-star run using only movement you already learned playing the game as a kid. Your time will be slow. It will also be a real, submittable time, which is more than most speedgames let you say after one evening.

Second, the improvement curve is steep early. The gap between "I beat the game" and "I beat the game in under an hour" is almost entirely route knowledge and clean long jumps, not exotic glitches. You buy back minutes just by knowing where you are going and not stopping to run when you could be long jumping.

![Bob-omb Battlefield, the first course every run touches and the friendliest place to learn a clean star grab.](/images/blog/super-mario-64/super-mario-64-speedrun-guide/bob-omb-battlefield.webp)

## Pick your category first

Do not start grabbing stars until you have decided what you are running. The three categories that make sense everywhere are defined by how many Power Stars you collect before beating Bowser:

- **16-star.** The minimum-viable "beat the game legitimately" run. You collect exactly the 16 stars needed to open the door quota to reach the basement, then the endless stairs. This is the beginner category and the one most people race.
- **70-star.** You collect 70 Power Stars, which is the number the game requires before the endless stairs stop looping you back. It is the "no major skips" showcase run and the longest of the common three.
- **120-star.** Every star in the game. The completionist marathon, and the category where the top times are genuinely astonishing.

There are also 0-star and 1-star categories, but those lean hard on the backwards long jump to clip through the endless-stairs trigger, and they only exist on unpatched original hardware. Skip them until you have the fundamentals.

## Why 16-star is the right starting line

16-star is where nearly everyone should begin, for concrete reasons:

1. **It is short.** A finished run is a handful of minutes for the fast folks and well under an hour for a beginner. Short runs mean more attempts per session, which means faster learning.
2. **The route is fixed and small.** You are collecting a specific, memorizable set of stars from the early courses. There is far less to hold in your head than a 70 or 120.
3. **It teaches the skills the bigger categories reuse.** Clean long jumps, efficient star grabs, and knowing the door-star quota all carry straight up into 70-star.

The one wrinkle: 16-star relies on a couple of intended-but-obscure sequence tricks (like grabbing certain stars out of order, and the Mario-Wing-Cap cannon shortcuts) rather than raw glitches. None of them are execution nightmares. They are the good kind of "the game let you do that."

## The beginner 16-star route in plain English

The exact modern route has small optimizations that shift over time, but the shape is stable and worth understanding before you memorize inputs. The core idea: the basement door needs a star quota to open, and the endless stairs need you past a threshold, so 16-star collects the cheapest, fastest stars that clear those gates.

In broad strokes, a beginner-friendly 16-star run:

- Opens in **Bob-omb Battlefield**, the first course, for a couple of quick early stars while you warm up your movement.
- Banks a handful more from the **early Bob-omb and Whomp's Fortress region**, because those stars are fast and the courses are close to the entrance.
- Uses the **basement** to reach Bowser in the Fire Sea only after the door quota is met, then heads for the endless stairs.
- Finishes with **Bowser in the Sky** once you clear the stairs.

Do not chase optimality on run one. Pick a written star order from a current community route, follow it slowly, and finish. A completed slow run teaches you ten times more than a fast run you keep resetting.

![The endless stairs — the 70-star gate that decides how each category is built.](/images/blog/super-mario-64/super-mario-64-speedrun-guide/endless-stairs.webp)

## The tech you actually need day one

You need exactly four things clean before your first real attempts. All four are covered in depth in the [Super Mario 64 movement guide](/blog/super-mario-64/super-mario-64-movement-guide); here is why each one matters to a run.

- **The long jump (run, hold Z, press A).** This is the whole game. The long jump moves Mario faster than his top running speed, so chaining long jumps instead of running is where beginners find most of their early time savings. If you only drill one thing, drill this.
- **Wall kicks.** Several star routes take a wall kick to reach a ledge faster than the intended path. The A press has to land during wall contact or Mario just bounces off, so practice on the castle pillars first.
- **Dive canceling.** Diving on a long fall makes Mario roll out of the landing and take no fall damage, which keeps you moving through descents that would otherwise cost you a stumble. Cancel with A or Z to keep momentum, never by pulling back on the stick.
- **The triple jump.** Some star grabs want the extra height. Needs a short runway, so line it up before you commit.

That is the entire toolkit for a beginner 16-star run. No BLJ, no frame-perfect anything.

## The tech you can skip for now

It is easy to watch a world record, see a wall clip, and assume you need it. You do not. Park these until your fundamentals are solid:

- **The backwards long jump (BLJ).** It builds speed past the game's cap to clip through walls and skip the stairs, and it is the backbone of 0-star and 1-star runs. It is also patched out of most versions you can buy, so it is not even an option on a Switch. Leave it alone until you are chasing sub-category times.
- **Advanced sequence breaks and precise cannon setups.** The optimized routes stack tricks that only save fractions of a second each. They matter at the top and are noise for a beginner. Get a clean completion first.

The through-line: the difference between a beginner and an intermediate 16-star runner is almost never a fancy glitch. It is cleaner long jumps and fewer stops.

## Timing your run so it counts

If you plan to submit to a leaderboard, timing has rules, and getting them wrong invalidates an otherwise good run.

- **Timing starts on the file.** The standard is that the timer begins when you select your save file and gain control, not on the title screen.
- **Timing ends on the grab.** The run ends when you grab the final Grand Star from Bowser in the Sky — the moment of collection, not when the credits or the ending cutscene play.
- **Record your gameplay.** Leaderboards want video. Set up capture or at minimum a phone on a tripod before you start grinding attempts, or your best run will be the one you cannot prove.
- **Know your load timing.** On emulator and on original hardware, load times differ, which is one more reason categories and leaderboards separate by platform.

![Bowser in the Sky — the timer stops the instant you grab the final Grand Star here.](/images/blog/super-mario-64/super-mario-64-speedrun-guide/bowser-in-the-sky.webp)

## Version matters more than you think

This is the thing new runners trip on. Super Mario 64 exists in several revisions, and they are not interchangeable for speedrunning.

The backwards long jump — the trick that makes 0-star and 1-star possible — was an oversight in the original release. Per the Super Mario Wiki it was fixed in the Rumble Pak Compatible Version, the iQue Player release, and **Super Mario 3D All-Stars**, and it never existed in the Super Mario 64 DS remake. Since the Switch collection is built on the Rumble Pak revision, it cannot BLJ at all.

The practical takeaway: **16-star, 70-star and 120-star work everywhere**, so those are the categories to learn on whatever you own. If you specifically want to run the low-star categories, you need an original N64 cartridge or an accurate emulator of it. Do not spend a week failing a BLJ on a Switch and conclude you are doing it wrong — the code simply will not let you.

## Where 70 and 120-star go from here

Once 16-star feels comfortable, 70-star is the natural next step. It reuses every skill you already built and mostly adds route length — you are collecting more stars from more courses, so the challenge shifts from execution to stamina and memorization. Because the endless stairs require 70 stars to stop looping, this category never touches a stair skip, which makes it the cleanest showcase of pure movement.

120-star is the endgame: every star in the game, including the brutal ones like the [100-coin stars and the toughest secret-course stars](/blog/super-mario-64/super-mario-64-secret-stars-guide). It is a different kind of run — a marathon of consistency where one bad course can sink 40 minutes of work. Most runners spend a long time in 16 and 70 before they commit to it.

Whichever way you go, the foundation is the same: pick a category, learn the route, make your long jumps clean, and finish runs instead of resetting them. If you are still filling in the basics of which courses open when, the [Super Mario 64 beginner guide](/blog/super-mario-64/super-mario-64-beginner-guide) covers the star-door quotas that the routes are built around.

## Quick Action Checklist

- Pick 16-star as your first category — it is short, the route is small, and it teaches skills the bigger categories reuse.
- Learn a written star order from a current community route and follow it slowly; finish a run before you chase speed.
- Drill the long jump until it is automatic — it is faster than running and it is where beginners find most of their early time.
- Get wall kicks, dive canceling, and the triple jump clean; that is the entire toolkit a beginner 16-star run needs.
- Ignore the BLJ and advanced sequence breaks until your fundamentals are solid.
- Start your timer on file select and stop it the instant you grab the final Grand Star in Bowser in the Sky.
- Record your attempts before you grind, or you cannot submit your best run.
- Run 16, 70, or 120-star on any version; only the original N64 code supports the low-star BLJ categories.`,
  faq: [
    {
      question: 'What is the best Super Mario 64 speedrun category for beginners?',
      answer:
        '16-star. It is the shortest of the common categories, uses a small fixed route, and requires no frame-perfect glitches — you can finish a legitimate run with movement you already know. It also teaches the long jumps and star-grab efficiency that 70-star and 120-star reuse.',
    },
    {
      question: 'Do you need to do a BLJ to speedrun Super Mario 64?',
      answer:
        'No. The backwards long jump is only used in the 0-star and 1-star categories to skip the endless stairs. The three main categories — 16-star, 70-star and 120-star — need no BLJ at all, which is why they work on every version of the game.',
    },
    {
      question: 'Why does 70-star matter in Super Mario 64?',
      answer:
        'The endless stairs loop Mario back until he has 70 Power Stars, at which point they let him through to Bowser in the Sky. That is the number the 70-star category is built around, and it is why the category never uses a stair skip.',
    },
    {
      question: 'When does the timer start and stop in a Super Mario 64 run?',
      answer:
        'The standard timing starts when you select your save file and gain control, and ends the moment you grab the final Grand Star from Bowser in the Sky — not on the title screen and not when the ending cutscene plays.',
    },
    {
      question: 'Can you speedrun Super Mario 64 on Switch?',
      answer:
        'Yes, for 16-star, 70-star and 120-star. The Super Mario 3D All-Stars version on Switch is based on the Rumble Pak revision, which patched out the backwards long jump, so the low-star BLJ categories require an original N64 cartridge or an accurate emulator instead.',
    },
  ],
  externalSources: [
    { url: 'https://www.mariowiki.com/Super_Mario_64', title: 'Super Mario 64 — Super Mario Wiki' },
    {
      url: 'https://www.mariowiki.com/List_of_Super_Mario_64_glitches',
      title: 'List of Super Mario 64 glitches — Super Mario Wiki',
    },
    { url: 'https://www.mariowiki.com/Power_Star', title: 'Power Star — Super Mario Wiki' },
  ],
  tldr:
    'Super Mario 64 is the friendliest game to start speedrunning: pick 16-star first, since it is short, uses a small fixed route, and needs no glitches. Drill the long jump (it beats running for travel speed), plus wall kicks, dive canceling and the triple jump, and you have the whole beginner toolkit. Time from file select to the final Grand Star grab. 16, 70 and 120-star run on any version; only the original N64 code supports the BLJ-dependent low-star categories, since the trick is patched out of Super Mario 3D All-Stars and absent from the DS remake.',
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/super-mario-64', anchor: 'Super Mario 64 coverage hub' },
    {
      href: '/blog/super-mario-64/super-mario-64-movement-guide',
      anchor: 'Super Mario 64 movement guide',
    },
    {
      href: '/blog/super-mario-64/super-mario-64-beginner-guide',
      anchor: 'Super Mario 64 beginner guide',
    },
    {
      href: '/blog/super-mario-64/super-mario-64-secret-stars-guide',
      anchor: 'Super Mario 64 secret stars guide',
    },
  ],
};
