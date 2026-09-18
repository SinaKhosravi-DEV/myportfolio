import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Content, Lang } from "../i18n/types";
import { en } from "../i18n/en";
import { fa } from "../i18n/fa";

interface LangContextValue {
  lang: Lang;
  content: Content;
  dir: "ltr" | "rtl";
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "sina-portfolio-lang";
const dictionaries: Record<Lang, Content> = { en, fa };

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fa" || stored === "en") return stored;
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const dir: "ltr" | "rtl" = lang === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fa" : "en"));
  };

  return (
    <LangContext.Provider
      value={{ lang, content: dictionaries[lang], dir, toggleLang }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
