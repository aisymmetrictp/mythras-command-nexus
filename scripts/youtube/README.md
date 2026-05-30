# YouTube description optimizer (local tool)

Rewrites your YouTube video descriptions for AI/search discoverability by
appending a consistent, crawlable links + hashtag block that ties each video
back to gamertagmythras.com. Runs **locally on your machine only** — it is not
part of the static site and is never deployed.

## One-time setup

1. In Google Cloud Console you created an **OAuth client (Web application)** with
   redirect URI `https://developers.google.com/oauthplayground`. Its Client ID +
   Secret are already in `.env` (gitignored).
2. Get a **refresh token** (authorizes editing one channel):
   - Go to https://developers.google.com/oauthplayground
   - Gear icon → check **Use your own OAuth credentials** → paste Client ID + Secret.
   - In "Input your own scopes" enter: `https://www.googleapis.com/auth/youtube.force-ssl`
   - **Authorize APIs** → sign in as the channel owner → pick the channel → allow.
   - **Exchange authorization code for tokens** → copy the **Refresh token** (`1//…`).
3. Paste it into `.env` as `REFRESH_TOKEN=` and set `CHANNEL=` to that channel's slug.
   (One token = one channel. Repeat per channel, swapping the token + slug.)

## Usage (run from `mythras-command-nexus/`)

```bash
# DRY RUN (default) — writes OLD vs NEW proposals to scripts/youtube/proposals/, no writes to YouTube
node scripts/youtube/optimize-descriptions.js --limit=25

# Real write to ONE video (after reviewing the dry run)
node scripts/youtube/optimize-descriptions.js --write --video=<videoId> --yes

# Batch-write every fetched video (careful — edits live descriptions)
node scripts/youtube/optimize-descriptions.js --write --all --yes
```

## Notes

- `videos.update` overwrites the whole snippet, so the script re-sends the existing
  title / categoryId / tags / language and only changes the description.
- The appended block is fenced by a marker, so re-running replaces it instead of
  stacking duplicates (idempotent).
- Current optimization is a deterministic links/keyword block. To add LLM-written
  per-video summaries (a stronger AI-search signal), swap the `optimizeDescription()`
  body to call an LLM (e.g. add `ANTHROPIC_API_KEY` to `.env`).
- Secrets live in `.env` (gitignored). Never commit the refresh token or client secret.
