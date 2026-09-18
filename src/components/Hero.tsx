import { useLang } from "../context/LangContext";
import CodeEditor from "./CodeEditor";

const profileImg = "/profile.jpg";

export default function Hero() {
  const { content } = useLang();
  const { hero } = content;

  return (
    <div id="top" className="max-w-[1120px] mx-auto px-7">
      <section className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-14 items-center pt-[150px] pb-24">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[13px] text-green mb-[22px]">
            <span className="text-[9px] animate-pulse2">●</span>
            {hero.eyebrow}
          </div>

          <h1 className="font-display font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(40px,7vw,68px)] mb-[18px]">
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
            <span className="text-yellow">.</span>
          </h1>

          <div className="font-mono text-base text-text-dim mb-[22px] flex items-center gap-2.5 flex-wrap">
            {hero.name}
            <span className="font-mono text-[11px] px-2.5 py-[3px] rounded-full border border-border text-orange bg-orange/10">
              {hero.level}
            </span>
          </div>

          <p className="text-base leading-[1.7] text-text-dim max-w-[520px] mb-[30px]">
            {hero.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-9">
            {hero.pills.map((pill) => (
              <span
                key={pill}
                className="font-mono text-[12.5px] px-3 py-1.5 rounded-md border border-border bg-bg-elev text-text-dim"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="flex gap-3.5 flex-wrap">
            <a
              href="https://github.com/SinaKhosravi-DEV"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm font-medium px-6 py-3 rounded-lg no-underline inline-flex items-center gap-2 bg-yellow text-[#161206] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(242,199,68,0.25)]"
            >
              {hero.githubBtn}
            </a>
            <a
              href="#projects"
              className="font-mono text-sm font-medium px-6 py-3 rounded-lg no-underline inline-flex items-center gap-2 border border-border text-text bg-transparent transition-transform hover:-translate-y-0.5 hover:border-text-dimmer"
            >
              {hero.projectsBtn}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[18px]">
          <div className="rounded-xl overflow-hidden border border-border bg-bg-elev shadow-[0_20px_40px_-18px_rgba(0,0,0,0.55)]">
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
                profile.jpg
              </span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-bg-elev-2">
              <img
                src={profileImg}
                alt={hero.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 22%" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/55" />
              <div className="absolute left-3.5 bottom-3 font-mono text-[11.5px] text-text-dim">
                sina<span className="text-yellow">.</span>dev
              </div>
            </div>
          </div>

          <CodeEditor filename={hero.filename} />
        </div>
      </section>
    </div>
  );
}
