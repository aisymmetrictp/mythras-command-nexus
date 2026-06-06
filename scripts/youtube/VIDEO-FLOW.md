# Video flow — recording → upload-ready package

Drop a raw recording in a folder, get back AI titles + a search-optimized
description (in your exact channel format) + candidate thumbnail frames, then
Claude builds the Canva thumbnail. All local except the Canva step.

## One-time setup (already done on this machine)
- `ffmpeg` / `ffprobe` on PATH ✓
- `pip install faster-whisper` ✓ (local transcription, free, offline after first model download)
- `scripts/youtube/.env` with `ANTHROPIC_API_KEY` (+ optional `LLM_MODEL`, `WHISPER_MODEL`) ✓

## Use it
1. Drop your recording(s) into `scripts/youtube/inbox/` (mp4/mov/mkv/webm/avi).
2. Run from `mythras-command-nexus/`:
   ```
   node scripts/youtube/video-flow.js
   ```
3. Each video produces `scripts/youtube/out/<name>/`:
   - `titles.txt` — 3 title options
   - `description.txt` — AI-search-optimized summary + divider + your channel footer
     (footer is auto-pulled from the freshest optimized video so it always matches)
   - `transcript.txt` — the local transcript
   - `frames/frame-1..5.jpg` — candidate thumbnail stills (1280px, at smart timestamps)
   - `thumbnail-brief.txt` — the punchy hook + brief for the Canva step
4. Ask Claude: **"make the Canva thumbnail for `<name>`"** → it generates an on-brand
   `youtube_thumbnail` in Canva from the hook + brand kit, exports a PNG, and gives you
   the editable Canva link (drop your favorite gameplay frame in to finish).
5. Upload to YouTube, paste the title + description, set the thumbnail.

## Knobs (env in scripts/youtube/.env)
- `WHISPER_MODEL` — default `small.en`. Use `base.en` for faster/rougher, `medium.en` for slower/better.
- `WHISPER_BEAM` — default `1`. Bump to `5` for slightly better accuracy (slower).
- `LLM_MODEL` — default `claude-haiku-4-5-20251001`.

`inbox/` and `out/` are gitignored (recordings + outputs are large / local-only).
Optional future step: auto-upload to YouTube via the existing OAuth (`videos.insert`) — kept manual for now.
