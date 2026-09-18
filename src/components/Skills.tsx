import { useLang } from "../context/LangContext";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const { content } = useLang();
  const { about } = content;
  const headRef = useReveal<HTMLDivElement>();
  const panelRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-border py-[90px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div ref={headRef} className="reveal mb-12">
          <div className="font-mono text-[13px] text-yellow mb-2.5">
            <span className="text-text-dimmer">{"// "}</span>
            {about.tag}
          </div>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,38px)] tracking-[-0.01em]">
            {about.title}
          </h2>
        </div>

        <div
          ref={panelRef}
          className="reveal rounded-xl overflow-hidden border border-border bg-bg-elev"
        >
          <div className="flex border-b border-border bg-bg-elev-2 overflow-x-auto">
            {about.tabs.map((tab, idx) => (
              <div
                key={tab}
                className={`font-mono text-[12.5px] px-7 py-3 border-e border-border whitespace-nowrap ${
                  idx === 0
                    ? "text-text bg-bg-elev border-b-2 border-b-yellow"
                    : "text-text-dim"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border">
            {about.skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-bg-elev px-4 py-[22px] flex flex-col gap-2.5 transition-colors hover:bg-bg-elev-2"
              >
                <div
                  className="w-[34px] h-[34px] rounded-lg flex items-center justify-center font-mono font-bold text-xs text-[#0a0c0e]"
                  style={{ background: skill.color }}
                >
                  {skill.code}
                </div>
                <div className="font-display font-semibold text-[15px]">
                  {skill.name}
                </div>
                <div className="font-mono text-[11.5px] text-text-dimmer">
                  {skill.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
