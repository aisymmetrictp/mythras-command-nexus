'use client';

import Link from 'next/link';
import type { ChatMessage as ChatMessageType, RecommendedLink } from '@/lib/assistant';

interface Props {
  message: ChatMessageType;
}

// Minimal inline markdown: **bold**, [text](href), and newlines. Avoids pulling in
// react-markdown for the small surface area the templates actually emit.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  // Pattern matches either **bold** or [label](href).
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > lastIndex) {
      out.push(text.slice(lastIndex, m.index));
    }
    if (m[1] !== undefined) {
      out.push(<strong key={`${keyPrefix}-b-${i++}`} className="text-white font-semibold">{m[1]}</strong>);
    } else if (m[2] !== undefined && m[3] !== undefined) {
      const label = m[2];
      const href = m[3];
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        out.push(
          <a
            key={`${keyPrefix}-l-${i++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0C850] underline decoration-[#D4A853]/40 hover:text-[#F0D68A] hover:decoration-[#D4A853]"
          >
            {label}
          </a>
        );
      } else {
        out.push(
          <Link
            key={`${keyPrefix}-l-${i++}`}
            href={href}
            className="text-[#F0C850] underline decoration-[#D4A853]/40 hover:text-[#F0D68A] hover:decoration-[#D4A853]"
          >
            {label}
          </Link>
        );
      }
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}

function renderBody(text: string): React.ReactNode {
  // Split by newlines into "paragraphs" (also handles `- bullet` list items as plain lines).
  const lines = text.split('\n');
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (trimmed === '') return <div key={`gap-${idx}`} className="h-2" aria-hidden />;
    const isBullet = trimmed.startsWith('- ');
    if (isBullet) {
      return (
        <div key={`line-${idx}`} className="flex gap-2 text-sm leading-relaxed">
          <span className="text-[#D4A853] mt-0.5" aria-hidden>·</span>
          <span>{renderInline(trimmed.slice(2), `bullet-${idx}`)}</span>
        </div>
      );
    }
    return (
      <p key={`line-${idx}`} className="text-sm leading-relaxed">
        {renderInline(trimmed, `p-${idx}`)}
      </p>
    );
  });
}

function ConfidenceBadge({ value }: { value: number }) {
  let label = 'Lower confidence';
  let cls = 'bg-orange-500/10 text-orange-300 border-orange-500/20';
  if (value >= 0.8) {
    label = 'High confidence';
    cls = 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
  } else if (value >= 0.5) {
    label = 'Moderate confidence';
    cls = 'bg-[#D4A853]/10 text-[#F0C850] border-[#D4A853]/20';
  }
  return (
    <span className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded border ${cls}`}>
      {label}
    </span>
  );
}

function LinkCard({ link }: { link: RecommendedLink }) {
  const isExternal = /^https?:\/\//.test(link.href);
  const inner = (
    <div className="block rounded-lg border border-[#D4A853]/15 bg-[#060610]/60 p-3 hover:border-[#D4A853]/40 hover:bg-[#060610] transition-all group">
      <div className="text-sm font-semibold text-white group-hover:text-[#F0C850] mb-1 leading-tight">
        {link.title}
      </div>
      <div className="text-xs text-[#9999aa] leading-relaxed line-clamp-2">{link.summary}</div>
    </div>
  );
  return isExternal ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <Link href={link.href}>{inner}</Link>
  );
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-tr-md px-4 py-2.5 bg-[#D4A853] text-[#060610] text-sm leading-relaxed shadow-md">
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[92%] w-full rounded-2xl rounded-tl-md px-4 py-3 bg-[#0c0c18]/80 border border-[#D4A853]/15 text-[#c8c8d4] shadow-md">
        <div className="space-y-2">{renderBody(message.text)}</div>

        {message.recommendedLinks && message.recommendedLinks.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[#D4A853]/10">
            <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-2">
              Suggested guides
            </div>
            <div className="grid grid-cols-1 gap-2">
              {message.recommendedLinks.slice(0, 4).map((l, i) => (
                <LinkCard key={`${l.href}-${i}`} link={l} />
              ))}
            </div>
          </div>
        )}

        {typeof message.confidence === 'number' && (
          <div className="mt-3 flex items-center gap-2 text-[10px] text-[#666]">
            <ConfidenceBadge value={message.confidence} />
            {message.matchedTopics && message.matchedTopics.length > 0 && (
              <span className="truncate">topics: {message.matchedTopics.slice(0, 3).join(', ')}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
