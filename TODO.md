# ✅ Pokémon Team Builder — TODO & Roadmap

This document tracks current development tasks, enhancements, and future features. Tasks are grouped roughly by priority.

---

## 🔧 Immediate Fixes & Improvements

These are the next practical cleanup and polish tasks:

- [ ] Update intro instructions to match current behavior:
  - Click a Pokémon to add it to the party.
  - Click it again to remove it.
  - Remove the old “double click to remove” wording.
- [ ] Hide the **Clear Party** button whenever the party is empty.
- [ ] Improve the party layout so party members display in a responsive grid instead of a single vertical column.
- [ ] Show party count, for example: `Party (3/6)`.
- [ ] Show the number of matching Pokémon in the results heading, for example: `Available Pokémon (82)`.
- [ ] Add user-friendly error handling when generation JSON fails to load.
- [ ] Add loading feedback while generation data is being fetched.
- [ ] Review and clean up old CSS classes left over from the Tailwind version.

### Linting

- [ ] Replace HTMLHint with `eslint-plugin-html` for inline HTML/JS linting.

  ```bash
  npm install --save-dev eslint-plugin-html
  npm remove htmlhint
  ```

  Then update the ESLint configuration as appropriate for the installed ESLint/plugin versions.

---

## ✅ Completed Refactor Work

- [x] Add `generations.json` as the supported-generation index.
- [x] Add generation dropdown populated from JSON.
- [x] Load the selected generation JSON dynamically.
- [x] Move Gen 1 display name and description into `gen1.json`.
- [x] Move game versions into `gen1.json`.
- [x] Move sprite-set options into `gen1.json`.
- [x] Remove hard-coded Red/Blue/Yellow version filtering from JavaScript.
- [x] Make version-exclusivity filtering generic.
- [x] Load generation data once and pass it to the party/team modules instead of refetching it.
- [x] Remove the hard-coded JavaScript type chart.
- [x] Read Pokémon weakness/resistance/immunity values directly from generation JSON.
- [x] Update team analysis to show Weak / Resist / Immune / Neutral counts.
- [x] Move from Tailwind styling to Pico CSS.
- [x] Confirm locally hosted PokeAPI sprites work with the selected sprite set.

---

## 🧹 Code Organization

- [ ] Consider adding `src/js/generation.js` once `ui.js` starts getting large.
  - Load the selected generation.
  - Populate sprite options.
  - Populate version options.
  - Update generation title/description.
  - Keep `ui.js` focused mainly on event listeners.
- [ ] Review `type-utils.js` and remove any unused parameters/functions left from the old type-chart implementation.
- [x] Remove `types.js` completely if no remaining imports depend on it.
- [ ] Remove unused variables and old comments left from the Gen 1-only implementation.
- [ ] Add consistent error messages for missing/malformed data files.

---

## 💡 Dev Quality

- [ ] Double-check the app with the Axe DevTools browser extension.
- [ ] Add a documented local production-build process.
- [ ] Verify `npm run build` produces a clean deployable build.
- [ ] Consider adding JSON validation for generation data so malformed files are caught early.
- [ ] Consider adding a shared schema/document describing the expected structure of `gen1.json`, `gen2.json`, etc.

---

## 📦 Deployment

- [ ] Confirm `vite.config.js` builds into `/dist`.
- [ ] Verify Pico CSS and local sprite/data assets are included correctly in production builds.
- [ ] Verify root-relative `/data/...` paths work correctly in the chosen production hosting environment.
- [ ] Document deployment steps.
- [ ] Keep/update the existing hosted demo after the refactor is stable.

---

## ⚡ Performance

- [x] Load generation Pokémon data only after a generation is selected.
- [ ] Add loading feedback while fetching generation data.
- [x] Review `src/js/loading-messages.js` and use it if still appropriate.
- [ ] Avoid refetching the same selected generation data while the user remains on that generation.
- [ ] Consider caching previously loaded generations in memory if switching between generations becomes common.
- [ ] Consider sprite image lazy-loading if later generations make the results page noticeably heavier.

---

## 📝 README Enhancements

Make sure these are reflected in `README.md`:

- [x] Update the architecture/data section to explain:
  - `generations.json`
  - generation-specific JSON files
  - data-driven versions and sprite sets
  - JSON-based weakness calculations
- [x] Add a “How to use the app” section:
  - Select a generation.
  - Select a sprite set.
  - Select a game version.
  - Choose filters.
  - Click **Show Pokémon**.
  - Click Pokémon to add/remove them from the party.
  - Explain the Weak / Resist / Immune / Neutral table.
- [ ] Remove references to double-clicking Pokémon if still present.
- [ ] Add screenshots of the updated Pico interface.
- [ ] Add a screenshot showing a completed party and team defensive matchup table.
- [x] Mention that sprites are sourced from the PokeAPI sprites repository and served from a local copy.
- [x] Add message that the app targets latest stable browser versions.

---

# 🚀 Release / MVP Planning

## ✅ MVP 1 — Generation I Fully Functional

Core features to complete before the first stable release:

- [x] Gen 1 Pokémon data loaded from JSON.
- [x] Gen 1 versions loaded from JSON.
- [x] Gen 1 sprite sets loaded from JSON.
- [x] Pokémon defensive matchups sourced from JSON instead of a hard-coded JavaScript type chart.
- [x] Team weakness/resistance/immunity summary.
- [x] Generation-aware architecture in place.
- [x] Pico CSS migration.
- [ ] Polish party display.
- [ ] Polish results display.
- [ ] Improve team matchup table readability.
- [ ] Add graceful fetch/data errors.
- [ ] Complete accessibility checks.
- [ ] Update README and screenshots.
- [ ] Final Gen 1 regression testing.
- [ ] Finalize first stable public release.

### Possible Gen 1 polish

- [ ] Sort the defensive matchup table so the largest weaknesses appear first.
- [ ] Add subtle color/status styling to Weak / Resist / Immune values.
- [ ] Show individual Pokémon defensive analysis.
- [ ] Show exact multipliers such as `4×`, `2×`, `½×`, and `¼×`.
- [ ] Add Pokédex links using the generation `serebiiDex` data.

---

## 🧬 MVP 2 — Generation II Expansion

Build on the generic generation system for Gold/Silver/Crystal:

- [ ] Review and complete `gen2.json`.
- [ ] Add/verify Gen 2 display metadata.
- [ ] Add/verify Gold, Silver, and Crystal version data.
- [ ] Add/verify Gen 2 sprite sets and local sprite paths.
- [ ] Verify all Gen 2 Pokémon entries.
- [ ] Verify Dark and Steel defensive values.
- [ ] Verify Gen 2 evolution metadata.
- [ ] Verify version exclusives.
- [ ] Test switching between Generation I and Generation II.
- [ ] Confirm switching generations clears the current party safely.
- [ ] Confirm the same generic filters work without Gen 2-specific JavaScript.
- [ ] Add Gen 2 screenshots/documentation.

> Goal: adding Gen 2 should mostly be a data task. Avoid adding generation-specific JavaScript unless the game mechanics genuinely require it.

---

## 🌍 MVP 3 — Generation III Expansion

Introduce Ruby/Sapphire/Emerald using the same data-driven architecture:

- [ ] Create `gen3.json`.
- [ ] Add Gen 3 Pokémon data.
- [ ] Add Ruby/Sapphire/Emerald version metadata.
- [ ] Add Gen 3 sprite sets and local sprite paths.
- [ ] Add Gen 3 defensive matchup data.
- [ ] Add/verify Gen 3 evolution metadata.
- [ ] Add/verify version exclusives.
- [ ] Test all existing generic filters against Gen 3.
- [ ] Add region metadata/filtering only if it provides useful behavior beyond the generation selector.

---

## 🔮 Future Features

These are useful ideas, but are not required for the first stable Gen 1 release:

- [ ] Individual Pokémon details panel.
- [ ] Exact defensive multipliers in the team analysis.
- [ ] Identify which party members create each weakness/resistance.
- [ ] Optional team suggestion logic.
- [ ] Optional Pokédex/detail view.
- [ ] Offline-first/PWA support.
- [ ] Add additional generations after Gen 3.
- [ ] Consider region filters if useful once multiple regions/generations are supported.

---

## Accessibility Fixes

### 🔍 Manual Accessibility Checks

- [ ] Test keyboard-only navigation (Tab, Enter, Space, etc.).
- [ ] Test adding/removing Pokémon using only the keyboard.
- [ ] Run through a screen reader (for example VoiceOver or NVDA).
- [ ] Verify sufficient color contrast for all normal, hover, focus, weak/resist, and disabled states.
- [ ] Ensure all interactive elements have visible focus outlines.

### 🧱 Semantic Structure and ARIA

- [x] Use semantic `<main>`, `<header>`, and `<footer>` landmarks.
- [x] Use labels for generation and filter form controls.
- [ ] Review whether party Pokémon should use buttons instead of clickable `<div>` elements.
- [ ] Add `aria-live` where appropriate for changing party/results information.
- [ ] Double-check sprite `alt` text.
- [ ] Verify disabled generation-dependent controls are announced clearly.
- [ ] Verify the defensive matchup table has appropriate headings/caption.

### ⚙️ Workflow and CI Enhancements

- [ ] Integrate linting and accessibility checks into GitHub Actions.
- [ ] Update production accessibility checks to the current hosted URL.
- [ ] Set up Lighthouse CI for performance, accessibility, SEO, and best-practice audits.
- [ ] Consider Prettier for consistent HTML, JavaScript, CSS, JSON, and Markdown formatting.
- [ ] Add automated JSON validation to CI.

---

## 🧪 Testing

- [ ] Add basic unit tests for generation data loading.
- [ ] Add tests for generic version-exclusivity filtering.
- [ ] Add tests for final-evolution filtering.
- [ ] Add tests for legendary filtering.
- [ ] Add tests for trade-evolution filtering.
- [ ] Add tests for weakness/resistance/immunity aggregation.
- [ ] Add tests ensuring switching generations clears incompatible party state.
- [ ] Consider Vitest for JavaScript unit tests.
- [ ] Consider Playwright for browser-level integration/accessibility tests.

---

## 📘 Optional Documentation & Community

These are optional and mainly useful if others begin contributing:

- [ ] Add contribution guidelines.
  - Explain how to install dependencies.
  - Explain how to run the dev server.
  - Explain linting/testing/formatting.
  - Document the generation JSON schema/conventions.
  - Explain how to add a new generation.
- [ ] Add a data-contribution guide for Pokémon JSON corrections/additions.
- [x] [Live API Docs](https://jennifert.github.io/Pokemon-Team-Builder/) — Auto-generated [JSDoc](https://jsdoc.app/) documentation.

---

## 📦 Tooling — Optional Enhancements

- [ ] Try `axe-playwright` or `jest-axe` for automated accessibility testing.
- [ ] Add unit/integration tests with Vitest and/or Playwright.
- [ ] Add JSON schema validation tooling if the generation data grows substantially.
