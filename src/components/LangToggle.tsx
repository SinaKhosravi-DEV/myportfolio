import { useLang } from "../context/LangContext";

export default function LangToggle() {
  const { lang, content, toggleLang } = useLang();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      title={content.toggles.lang}
      className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border text-text-dim hover:text-text hover:border-text-dimmer transition-colors font-mono text-xs"
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {lang === "en" ? "FA" : "EN"}
    </button>
  );
}
