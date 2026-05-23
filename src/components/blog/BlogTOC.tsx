import type { BlogTocEntry } from '@/data/blog/blogTypes';

type Props = { toc: BlogTocEntry[] };

export default function BlogTOC({ toc }: Props) {
  if (toc.length === 0) return null;

  return (
    <nav className="rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-5 my-8">
      <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-3">
        Table of Contents
      </div>
      <ol className="space-y-1.5 text-sm">
        {toc.map((entry, i) => (
          <li key={i} className={entry.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${entry.id}`}
              className="text-[#c8c8d4] hover:text-[#F0C850] transition-colors flex items-start gap-2"
            >
              <span className="text-[#D4A853]/60 text-xs mt-0.5">{entry.level === 3 ? '↳' : '·'}</span>
              <span>{entry.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
