import { useLang } from "../context/LangContext";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

const SECTION_IDS = ["top", "about", "projects", "contact"];

export default function Header() {
  const { content } = useLang();
  const active = useActiveSection(SECTION_IDS);

  const navItems: { id: string; label: string }[] = [
    { id: "top", label: content.nav.home },
    { id: "about", label: content.nav.about },
    { id: "projects", label: content.nav.projects },
    { id: "contact", label: content.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1120px] mx-auto px-7 h-[60px] flex items-center justify-between">
        <a
          href="#top"
          className="font-mono font-bold text-[15px] flex items-center gap-2 text-text no-underline"
        >
          <span className="text-yellow">{"</>"}</span>
          Sina Khosravi
        </a>

        <nav className="hidden sm:flex items-center h-full">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2 h-full px-4 font-mono text-[13px] no-underline transition-colors border-y-0 ${
                idx === 0 ? "border-s" : ""
              } border-e border-border ${
                active === item.id
                  ? "text-text bg-bg-elev"
                  : "text-text-dim hover:text-text"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  active === item.id ? "bg-yellow" : "bg-text-dimmer"
                }`}
              />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
