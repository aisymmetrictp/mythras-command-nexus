"""
Local transcription for the video flow. Prints the plain transcript to stdout;
all logs/progress go to stderr so the Node orchestrator can capture clean text.

Usage:  python transcribe.py <audio_or_video_path>
Env:    WHISPER_MODEL (default 'small.en'), WHISPER_BEAM (default '1')

First run downloads the model (~240 MB for small.en) and caches it under
~/.cache/huggingface — subsequent runs are offline + instant to start.
"""
import os
import sys

def log(*a):
    print(*a, file=sys.stderr, flush=True)

def main():
    if len(sys.argv) < 2:
        log("usage: python transcribe.py <audio_or_video>")
        sys.exit(2)
    path = sys.argv[1]
    model_size = os.environ.get("WHISPER_MODEL", "small.en")
    beam = int(os.environ.get("WHISPER_BEAM", "1"))

    from faster_whisper import WhisperModel
    log(f"[transcribe] loading model '{model_size}' (cpu/int8)…")
    model = WhisperModel(model_size, device="cpu", compute_type="int8")
    log(f"[transcribe] transcribing {os.path.basename(path)} (beam={beam}, vad on)…")
    segments, info = model.transcribe(path, beam_size=beam, vad_filter=True)
    parts = []
    for seg in segments:
        t = seg.text.strip()
        if t:
            parts.append(t)
    transcript = " ".join(parts).strip()
    log(f"[transcribe] done — {len(transcript)} chars, detected lang {getattr(info,'language','?')}")
    # Only the transcript goes to stdout.
    sys.stdout.write(transcript)

if __name__ == "__main__":
    main()
