# ✅ Pokémon Team Builder — TODO & Roadmap

This document tracks all potential development tasks, enhancements, and future features. Tasks are grouped by scope and priority.

---

## 🔧 Immediate Fixes & Improvements

These tasks are now considered high-priority for code clarity and polish:
- [ ] Change HTMLHINT for `eslint-plugin-html` for in-line HTML/JS linting
   ``` 
   npm install --save-dev eslint-plugin-html
   npm remove htmlhint 
   ```
   
    In your ESLint config:
    
    ```
    export default defineConfig([
    {
        files: ['**/*.html'],
        plugins: ['html'],
        extends: ['plugin:html/recommended']
    }
    ]);
    ```

---

## 💡 Dev Quality
- [ ] Double check dev Axe-core browser extension to check accessibility
- [ ] add in build process to build files on machine.

---

## 📦 Deployment

- [ ] Set up `vite.config.js` to build into `/dist`
- [ ] Deploy to GitHub Pages or Netlify (super easy with Vite)

---

## ⚡️ Performance

- [ ] Lazy-load large data files only when needed
- [ ] Add loading spinners or feedback when fetching data

---

## 📝 README Enhancements

Make sure these are reflected in `README.md` (some already are):

- [ ] Add section: “How to use the app once it’s running” (selecting Pokémon, building a team, clearing team etc.)
    - In that section, you can walk the user through using the tool in the browser – for example: selecting a game version and sprite set, adding Pokémon to the team (click to add, double-click to remove), and viewing the weakness breakdown table. Essentially, explain the UI controls and what the user should do to build their team and interpret the results. This will help non-developers understand the app’s functionality.
- [ ] Screenshots/Demo (optional): If feasible, adding a screenshot or animated GIF of the app in action can be very effective. For example, show the interface with a team built and the weakness table displayed. This isn’t required, but a visual can attract interest. You can always add this once the UI is polished.
- [x] ✅ Add message that works on latest stable version of browsers.


---

## 🚀 MVP Planning

### ✅ MVP 1 – Gen 1 Fully Functional
Core features to complete before version 1.0 is “feature complete”:

- [ ] Refactor `types.js` to source from a JSON file instead of hardcoding
- [ ] Add Pokédex view using `serebiiDex` URLs
- [ ] Implement team suggestion logic (future AI assist)
- [ ] Add offline-first support (PWA optional)
- [ ] Polish Gen 1 functionality and finalize for public release

---

### 🧬 MVP 2 – Gen 2 Expansion
Builds on MVP 1 with support for Pokémon Gold/Silver/Crystal:

- [ ] Add Gen 2 Pokémon data and sprites
- [ ] Update filtering to allow Gen 1 or Gen 1+2 toggles
- [ ] Extend type chart and evolution rules as needed

---

### 🌍 MVP 3 – Gen 3 Expansion
Introduce support for Ruby/Sapphire/Emerald:

- [ ] Add Gen 3 Pokémon and sprites
- [ ] Expand Pokédex filters, forms, and spritesets
- [ ] Add region filter (Kanto/Johto/Hoenn/etc.)

---

## 🧠 Package.json Suggestions

These are enhancements to your `package.json` file for clarity and collaboration:

- [x] ✅ Optionally include a `"browserslist"` entry for PostCSS clarity


---

## Accessibility Fixes

### 🔍 Manual Accessibility Checks
- [ ] Test keyboard-only navigation (Tab, Enter, Space, etc.)
- [ ] Run through a screen reader (e.g., VoiceOver, NVDA)
- [ ] Verify sufficient color contrast for all states (normal, hover, focus)
- [ ] Ensure all interactive elements have visible focus outlines

### 🧱 Semantic Structure and ARIA
- [ ] Use semantic HTML5 landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`)
- [ ] Add `aria-label` or `aria-describedby` where appropriate
- [ ] Double-check `alt` attributes for clarity and accuracy
- [ ] Ensure all form controls are properly labeled

### ⚙️ Workflow and CI Enhancements
- [ ] Integrate `npm run lint:*` and `a11y:prod` into GitHub Actions or another CI tool. Change prod to: https://team-builder-app-7tqzs.ondigitalocean.app/?
- [ ] Add `npm run a11y:prod` to your production build step (optional)
- [ ] Set up Lighthouse CI for full audits (performance, PWA, SEO, a11y)
- [ ] Consider `prettier` for auto-formatting HTML, JS, and CSS

---

## 📘 OPTIONAL Documentation & Community (Optional for Public Projects)

These are entirely optional and relevant only if the project will be used or contributed to by others:

- [ ] Add contribution guidelines
  - Should describe how to lint, test, and format code
  - Mention if PRs are welcome and any project-specific conventions
- [x] [Live API Docs](https://jennifert.github.io/Pokemon-Team-Builder/) — Auto-generated [JSDoc](https://jsdoc.app/) documentation

### 📦 Tooling (Optional Enhancements)
- [ ] Try `axe-playwright` or `jest-axe` for accessibility testing in automated tests
- [ ] Add unit or integration tests (e.g., with Vitest or Jest)