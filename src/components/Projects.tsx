import { useLang } from "../context/LangContext";
import { useReveal } from "../hooks/useReveal";
import type { ProjectItem } from "../i18n/types";

function ProjectCard({
  project,
  featuredLabel,
  liveDemo,
}: {
  project: ProjectItem;
  featuredLabel: string;
  liveDemo: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal rounded-xl overflow-hidden border border-border bg-bg-elev grid grid-cols-1 md:grid-cols-[1fr_1.3fr] transition-[border-color,transform] duration-200 hover:border-text-dimmer hover:-translate-y-[3px]"
    >
      <div className="bg-bg-elev-2 border-b md:border-b-0 md:border-e border-border flex flex-col min-h-[180px]">
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border">
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#f2c744" }}
          />
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#EAE0C8" }}
          />
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#AE8EFE" }}
          />
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#FB7185" }}
          />
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#6bcf8f" }}
          />
          <span
            className="w-[11px] h-[11px] rounded-full"
            style={{ background: "#FFFFFF" }}
          />
          <span className="ms-2 font-mono text-[11px] text-text-dimmer bg-bg px-2.5 py-[3px] rounded-md flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {project.url}
          </span>
        </div>
        <div
          className="flex-1 flex items-center justify-center font-display font-bold text-[30px] tracking-[-0.02em] px-5 py-[34px] text-center"
          style={{
            color: project.accent,
            background: `radial-gradient(circle at 50% 30%, ${project.accent}20, transparent 70%)`,
          }}
        >
          {project.file}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-3.5">
        {project.featured && (
          <span className="font-mono text-[10.5px] font-bold text-bg bg-yellow px-2.5 py-[3px] rounded-full self-start">
            {featuredLabel}
          </span>
        )}
        <div className="font-display font-bold text-[21px]">
          {project.title}
        </div>
        <p className="text-[14.5px] leading-[1.65] text-text-dim">
          {project.desc}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-text-dim border border-border px-2.5 py-[3px] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[13px] text-yellow no-underline inline-flex items-center gap-1.5 mt-1 hover:underline"
        >
          {liveDemo}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { content } = useLang();
  const { projects } = content;
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="border-t border-border py-[90px]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div ref={headRef} className="reveal mb-12">
          <div className="font-mono text-[13px] text-yellow mb-2.5">
            <span className="text-text-dimmer">{"// "}</span>
            {projects.tag}
          </div>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,38px)] tracking-[-0.01em]">
            {projects.title}
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {projects.items.map((project) => (
            <ProjectCard
              key={project.url}
              project={project}
              featuredLabel={projects.featuredLabel}
              liveDemo={projects.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
