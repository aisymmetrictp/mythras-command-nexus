import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_POSTS, getPostBySlug, getRelatedPosts } from '@/data/blog/blogIndex';
import { getGameBySlug } from '@/data/blog/games';
import BlogPostBody from '@/components/blog/BlogPostBody';

export function generateStaticParams() {
  return ALL_POSTS.map(p => ({ game: p.game, slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string; slug: string }> }): Promise<Metadata> {
  const { game, slug } = await params;
  const post = getPostBySlug(game, slug);
  if (!post) return { title: 'Post Not Found' };

  const url = `https://gamertagmythras.com/blog/${post.game}/${post.slug}`;

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastUpdated,
    },
    twitter: { title: post.title, description: post.metaDescription, card: 'summary_large_image' },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ game: string; slug: string }> }) {
  const { game, slug } = await params;
  const post = getPostBySlug(game, slug);
  if (!post) notFound();
  const g = getGameBySlug(post.game);
  if (!g) notFound();

  const related = getRelatedPosts(post, 3);
  return <BlogPostBody post={post} related={related} />;
}
