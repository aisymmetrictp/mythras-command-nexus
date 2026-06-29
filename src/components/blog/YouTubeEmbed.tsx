// Privacy-friendly, lazy-loaded embed of the channel's own gameplay video.
// Used to put first-hand original media on guides (E-E-A-T "Experience" signal).
// Server-component safe (plain iframe, no client JS).

type Props = { id: string; title: string; uploadDate?: string };

export default function YouTubeEmbed({ id, title, uploadDate }: Props) {
  // VideoObject structured data so search/AI crawlers register this first-hand
  // gameplay as original media (E-E-A-T). uploadDate is recommended for rich
  // results; emitted only when known so we never ship a fabricated date.
  const videoLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: `Gameplay and strategy from the Mythras // The Multiverse channel — ${title}.`,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
    publisher: { '@type': 'Organization', name: 'Mythras // The Multiverse' },
  };
  if (uploadDate) videoLd.uploadDate = uploadDate;

  return (
    <figure className="my-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
      />
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
