export type Lang = "en" | "fa";

export interface SkillItem {
  code: string;
  color: string;
  name: string;
  note: string;
}

export interface ProjectItem {
  file: string;
  url: string;
  link: string;
  featured?: boolean;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    name: string;
    role: string;
    level: string;
    bio: string;
    pills: string[];
    githubBtn: string;
    projectsBtn: string;
    filename: string;
  };
  about: {
    tag: string;
    title: string;
    tabs: string[];
    skills: SkillItem[];
  };
  projects: {
    tag: string;
    title: string;
    featuredLabel: string;
    liveDemo: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    sub: string;
    instagram: string;
    github: string;
    x: string;
    linkedin: string;
  };
  footer: {
    line: string;
  };
  toggles: {
    theme: string;
    lang: string;
  };
}
