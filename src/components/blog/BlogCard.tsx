import Link from 'next/link';
import type { BlogPost } from '@/data/blog/blogTypes';
import { getCategoryBySlug } from '@/data/blog/categories';

type Props = { post: BlogPost; gameSlug: string };

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogCard({ post, gameSlug }: Props) {
  const category = getCategoryBySlug(post.category);

  return (
    <Link
      href={`/blog/${gameSlug}/${post.slug}`}
      className="group block glass-panel rounded-xl p-5 md:p-6 border border-[#D4A853]/10 hover:border-[#D4A853]/40 transition-all hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-3 mb-3 text-xs text-[#9999aa]">
        {category && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#D4A853]/10 text-[#F0C850] font-semibold tracking-wider uppercase text-[10px]">
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </span>
        )}
        <span>{formatDate(post.publishDate)}</span>
        <span className="text-[#55556a]">·</span>
        <span>{post.readingTimeMin} min read</span>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#F0C850] transition-colors leading-snug mb-2" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}>
        {post.title}
      </h3>
      <p className="text-sm text-[#9999aa] leading-relaxed line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#D4A853] group-hover:gap-2 transition-all">
        Read article
        <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
