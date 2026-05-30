---
description: Draft and publish a new Cookie Run: Kingdom blog post end-to-end (research → file → registry → sitemap → build → Netlify deploy → commit).
argument-hint: <topic or post idea> [optional: category, target keyword, notes]
---

Spawn the `crk-blog-writer` agent to draft and publish a new Cookie Run: Kingdom blog post.

**Topic / brief**: $ARGUMENTS

Run the full publish pipeline defined in the agent:
1. If the brief is vague, propose 2-3 specific angles from the editorial calendar's slot-filler bench and ask which to pursue.
2. Optionally do web research on safe-list sources for any facts not in the agent's verified-facts list. Mark uncertain facts inline with `[VERIFY]`.
3. Pick a canonical slug (no dates), category, and topic cluster.
4. Draft the `BlogPost` object and write it to `mythras-command-nexus/src/data/blog/cookie-run-kingdom/posts/<slug>.ts`.
5. Register it in `src/data/blog/cookie-run-kingdom/index.ts`.
6. Add images per the `image-curator` playbook — a hero/OG image (`heroImage` + `heroImageAlt`) and 2-4 inline images, owned-assets-first, each with specific alt text and a recorded `imageSources` entry. Downloaded locally to `public/images/blog/cookie-run-kingdom/<slug>/`, never hotlinked.
7. Add a `<url>` entry to `public/sitemap.xml`.
8. Run `npm run build` to verify static generation.
9. **Manually deploy via `netlify deploy --prod --dir=out --no-build`** — the site is NOT git-connected and the `--no-build` flag is required (plain deploy fails via the `@netlify/plugin-nextjs` runtime).
10. Commit and push to `master`.
11. Report back with the live URL, word count, `[VERIFY]` flags, internal-link count, and commit SHA.

Respect the agent's voice spec (2nd person, punchy hook, no AI-isms, Quick Action Checklist before FAQ, no conclusion paragraph). Apply the publish-readiness checklist before marking done.
