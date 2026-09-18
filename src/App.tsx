import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider, useLang } from "./context/LangContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AppShell() {
  const { dir } = useLang();

  return (
    <div className={dir === "rtl" ? "font-fa" : ""}>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppShell />
      </LangProvider>
    </ThemeProvider>
  );
}
