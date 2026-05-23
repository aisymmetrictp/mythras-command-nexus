import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

type Props = { content: string };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    const props = (node as { props: { children?: React.ReactNode } }).props;
    return extractText(props.children);
  }
  return '';
}

export default function BlogMarkdown({ content }: Props) {
  return (
    <div className="blog-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {children}
            </h1>
          ),
          h2: ({ children }) => {
            const id = slugify(extractText(children));
            return (
              <h2
                id={id}
                className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 pb-2 border-b border-[#D4A853]/15 scroll-mt-24"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = slugify(extractText(children));
            return (
              <h3
                id={id}
                className="text-xl md:text-2xl font-semibold text-[#F0C850] mt-8 mb-3 scroll-mt-24"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
              >
                {children}
              </h3>
            );
          },
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-white mt-6 mb-2">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="text-[#c8c8d4] leading-relaxed mb-5 text-[15px] md:text-base">{children}</p>
          ),
          a: ({ href, children }) => {
            if (!href) return <span>{children}</span>;
            const isExternal = href.startsWith('http');
            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4A853] underline decoration-[#D4A853]/30 underline-offset-2 hover:text-[#F0C850] hover:decoration-[#D4A853]/70 transition-colors"
                >
                  {children}
                </a>
              );
            }
            return (
              <Link
                href={href}
                className="text-[#D4A853] underline decoration-[#D4A853]/30 underline-offset-2 hover:text-[#F0C850] hover:decoration-[#D4A853]/70 transition-colors"
              >
                {children}
              </Link>
            );
          },
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-6 mb-5 space-y-2 text-[#c8c8d4] marker:text-[#D4A853]/60">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-6 mb-5 space-y-2 text-[#c8c8d4] marker:text-[#D4A853]/60">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
          em: ({ children }) => <em className="italic text-[#F0D68A]">{children}</em>,
          code: ({ children, className }) => {
            const isBlock = className?.includes('language-');
            if (isBlock) {
              return (
                <code className="block bg-[#0c0c18] border border-[#D4A853]/10 rounded-lg p-4 overflow-x-auto text-sm text-[#F0D68A] font-mono">
                  {children}
                </code>
              );
            }
            return (
              <code className="bg-[#151522] border border-[#D4A853]/15 rounded px-1.5 py-0.5 text-sm text-[#F0C850] font-mono">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <pre className="mb-5 overflow-x-auto">{children}</pre>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#D4A853] bg-[#D4A853]/5 pl-5 pr-4 py-3 my-6 rounded-r-lg text-[#c8c8d4] italic">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />,
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6 rounded-lg border border-[#D4A853]/15">
              <table className="w-full text-sm text-left">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-[#D4A853]/10 text-[#F0C850] uppercase text-xs tracking-wider">{children}</thead>,
          tbody: ({ children }) => <tbody className="divide-y divide-[#D4A853]/10">{children}</tbody>,
          tr: ({ children }) => <tr className="hover:bg-white/[0.02] transition-colors">{children}</tr>,
          th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
          td: ({ children }) => <td className="px-4 py-3 text-[#c8c8d4]">{children}</td>,
          img: ({ src, alt }) =>
            src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={String(src)} alt={alt ?? ''} className="rounded-lg my-6 max-w-full border border-[#D4A853]/15" />
            ) : null,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
