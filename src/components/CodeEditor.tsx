import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";

interface CodeToken {
  text: string;
  className?: string;
}

interface CodeLine {
  tokens: CodeToken[];
}

function buildLines(name: string, role: string, level: string): CodeLine[] {
  return [
    {
      tokens: [
        { text: "const ", className: "text-purple" },
        { text: "sina", className: "text-blue" },
        { text: " = {" },
      ],
    },
    {
      tokens: [
        { text: "  name", className: "text-orange" },
        { text: ": " },
        { text: `"${name}"`, className: "text-green" },
        { text: "," },
      ],
    },
    {
      tokens: [
        { text: "  role", className: "text-orange" },
        { text: ": " },
        { text: `"${role}"`, className: "text-green" },
        { text: "," },
      ],
    },
    {
      tokens: [
        { text: "  level", className: "text-orange" },
        { text: ": " },
        { text: `"${level}"`, className: "text-green" },
        { text: "," },
      ],
    },
    {
      tokens: [
        { text: "  stack", className: "text-orange" },
        { text: ": [" },
        { text: '"HTML"', className: "text-green" },
        { text: "," },
        { text: '"CSS"', className: "text-green" },
        { text: "," },
        { text: '"React"', className: "text-green" },
        { text: "]," },
      ],
    },
    {
      tokens: [
        { text: "  learning", className: "text-orange" },
        { text: ": " },
        { text: "true", className: "text-blue" },
        { text: "," },
      ],
    },
    {
      tokens: [
        { text: "  sharesKnowledge", className: "text-orange" },
        { text: ": " },
        { text: "true", className: "text-blue" },
      ],
    },
    { tokens: [{ text: "};" }] },
  ];
}

export default function CodeEditor({ filename }: { filename: string }) {
  const { content } = useLang();
  const [visibleCount, setVisibleCount] = useState(0);

  const lines = buildLines(
    content.hero.name,
    content.hero.role,
    content.hero.level
  );

  useEffect(() => {
    setVisibleCount(0);
    let cancelled = false;
    let i = 0;
    const startDelay = window.setTimeout(function typeNext() {
      if (cancelled) return;
      i += 1;
      setVisibleCount(i);
      if (i < lines.length) {
        window.setTimeout(typeNext, 260);
      }
    }, 400);
    return () => {
      cancelled = true;
      window.clearTimeout(startDelay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-bg-elev shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 px-3.5 py-3 border-b border-border bg-bg-elev-2">
        <span
          className="w-[11px] h-[11px] rounded-full"
          style={{ background: "#ef6461" }}
        />
        <span
          className="w-[11px] h-[11px] rounded-full"
          style={{ background: "#f2c744" }}
        />
        <span
          className="w-[11px] h-[11px] rounded-full"
          style={{ background: "#6bcf8f" }}
        />
        <span className="ms-2 font-mono text-xs text-text-dim">
          {filename}
        </span>
      </div>
      <div className="px-5 py-[22px] font-mono text-[13.5px] leading-[1.85] min-h-[220px]">
        {lines.slice(0, visibleCount).map((line, idx) => (
          <div key={idx} className="animate-fadeIn">
            <span className="inline-block w-[22px] text-text-dimmer select-none">
              {idx + 1}
            </span>
            {line.tokens.map((tok, tIdx) => (
              <span key={tIdx} className={tok.className ?? "text-text"}>
                {tok.text}
              </span>
            ))}
          </div>
        ))}
        {visibleCount >= lines.length && (
          <span className="inline-block w-[7px] h-[15px] bg-yellow align-middle animate-blink" />
        )}
      </div>
    </div>
  );
}
