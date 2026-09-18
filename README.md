# Sina Khosravi — Portfolio (React + TypeScript + Tailwind)

This is a React + TypeScript + Tailwind CSS conversion of the original static
HTML portfolio, with two added controls in the header:

- **Theme toggle** — switches between the original dark theme and a matching
  light theme (persisted in `localStorage`, defaults to dark).
- **Language toggle (EN / FA)** — switches all site copy between English and
  Persian, and flips the page direction to RTL with a Persian-friendly font
  (persisted in `localStorage`, defaults to English).

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/        UI components (Header, Hero, Skills, Projects, Contact, Footer, toggles)
  context/            ThemeContext (dark/light) and LangContext (en/fa)
  hooks/              useReveal (scroll-reveal), useActiveSection (nav highlighting)
  i18n/                en.ts / fa.ts content dictionaries + shared types
  index.css            Tailwind entry + CSS variables for both themes
public/
  profile.jpg          Profile photo (extracted from the original inline base64 image)
```

## Notes

- All colors are driven by CSS custom properties (`--bg`, `--yellow`, etc.)
  defined in `src/index.css` under `:root[data-theme="dark"]` and
  `:root[data-theme="light"]`, and consumed through Tailwind's `theme.extend.colors`
  in `tailwind.config.ts`.
- Editing copy: change `src/i18n/en.ts` and `src/i18n/fa.ts` — every string on
  the page comes from there, so nothing needs to be touched in the components
  themselves for content edits.
