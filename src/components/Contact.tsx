import { useLang } from "../context/LangContext";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { content } = useLang();
  const { contact } = content;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="border-t border-border py-[90px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-2xl border border-border bg-bg-elev text-center px-9 py-[52px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,199,68,0.08),transparent_60%)]" />

          <div className="relative z-10">
            <div className="font-display font-bold text-[clamp(26px,4vw,36px)] mb-3.5">
              {contact.title.replace(/\.$/, "")}
              <span className="text-yellow">.</span>
            </div>
            <p className="text-text-dim max-w-[460px] mx-auto mb-8 leading-[1.6]">
              {contact.sub}
            </p>
            <div className="flex justify-center gap-3.5 flex-wrap">
              <a
                href="https://instagram.com/sinatra.dev"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm border border-border px-6 py-3 rounded-lg no-underline text-text inline-flex items-center gap-2.5 bg-bg transition-[border-color,transform] hover:border-yellow hover:-translate-y-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                {contact.instagram}
              </a>
              <a
                href="https://github.com/SinaKhosravi-DEV"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm border border-border px-6 py-3 rounded-lg no-underline text-text inline-flex items-center gap-2.5 bg-bg transition-[border-color,transform] hover:border-yellow hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.17.7-3.84-1.4-3.84-1.4-.52-1.3-1.27-1.66-1.27-1.66-1.04-.7.08-.7.08-.7 1.14.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.15v3.19c0 .3.21.66.79.55 4.51-1.5 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5z" />
                </svg>
                {contact.github}
              </a>
              <a
                href="https://x.com/Sinatra_Dev"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm border border-border px-6 py-3 rounded-lg no-underline text-text inline-flex items-center gap-2.5 bg-bg transition-[border-color,transform] hover:border-yellow hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
                {contact.x}
              </a>
              <a
                href="www.linkedin.com/in/sina-khosravi-47b049428"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm border border-border px-6 py-3 rounded-lg no-underline text-text inline-flex items-center gap-2.5 bg-bg transition-[border-color,transform] hover:border-yellow hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M0 0h16v16H0z" fill="none" />
                  <path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                {contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
