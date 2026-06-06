// Privacy-friendly, lazy-loaded embed of the channel's own gameplay video.
// Used to put first-hand original media on guides (E-E-A-T "Experience" signal).
// Server-component safe (plain iframe, no client JS).

type Props = { id: string; title: string };

export default function YouTubeEmbed({ id, title }: Props) {
  return (
    <figure className="my-8">
      <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-2">
        Watch — our gameplay on this
      </div>
      <div className="relative w-full overflow-hidden rounded-xl border border-[#D4A853]/20 bg-black" style={{ aspectRatio: '16 / 9' }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-2 text-xs text-[#9999aa]">
        From the Mythras channel:{' '}
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4A853] hover:text-[#F0C850]"
        >
          {title}
        </a>
      </figcaption>
    </figure>
  );
}
