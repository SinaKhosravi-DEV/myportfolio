import { useLang } from "../context/LangContext";

export default function Footer() {
  const { content } = useLang();
  const [before, after] = content.footer.line.split("//");

  return (
    <footer className="py-[30px] pb-10 text-center">
      <div className="max-w-[1120px] mx-auto px-7">
        <p className="font-mono text-xs text-text-dimmer">
          {before}
          {after !== undefined && (
            <>
              <span className="text-yellow">//</span>
              {after}
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
