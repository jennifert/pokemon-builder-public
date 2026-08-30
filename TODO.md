# ✅ Pokémon Team Builder — TODO & Roadmap

This document tracks development tasks by planned release.

The current goal is to complete and polish **Generation I** for the first stable release. Later generations will build on the same data-driven architecture.

---

# ✅ v0.7 — Gen I UI/CSS Polish

Focus: migrate the interface to Pico CSS and polish the Generation I presentation.

- [x] Move from Tailwind styling to Pico CSS.
- [x] Polish available Pokémon results display.
- [x] Improve party layout.
- [x] Display the six-member party as a 3 × 2 grid.
- [x] Improve team matchup table readability.
- [x] Hide **Clear Party** when the party is empty.
- [x] Confirm layout works at desktop widths.
- [x] Confirm layout remains usable on small screens.
- [x] Remove unnecessary custom CSS.
- [x] Confirm Pico CSS and local assets work in the production build.
- [x] Deploy updated interface to the hosted demo.

---

# 🔧 v0.8 — Gen I Final Features, Cleanup & Testing

Focus: finish remaining Generation I behavior and clean up the application before the accessibility pass.

## UI / Behavior

- [x] Update intro instructions to match current behavior:
  - Click a Pokémon to add it to the party.
  - Click it again to remove it.
  - Remove the old “double click to remove” wording.
- [ ] Show party count.
  - Example: `Party (3/6)`
- [ ] Show number of matching Pokémon.
  - Example: `Available Pokémon (82)`
- [ ] Add loading feedback while generation data is being fetched.
- [ ] Add user-friendly error handling when generation JSON fails to load.
- [ ] Add consistent errors for missing or malformed generation data.

## Cleanup

- [ ] Review HTML/JavaScript for old Tailwind-era classes.
- [ ] Remove unused CSS classes and old styling references.
- [ ] Remove remaining references to double-clicking Pokémon.
- [ ] Review JavaScript for obvious unused code/imports.
- [ ] Confirm `type-utils.js` remains clean after the type-chart refactor.

## Gen I Regression Testing

Test all Generation I functionality before moving to the accessibility release.

- [ ] Generation I loads correctly.
- [ ] Red/Blue/Yellow version filtering works correctly.
- [ ] Sprite-set selection works correctly.
- [ ] Final-evolution filtering works correctly.
- [ ] Trade-evolution filtering works correctly.
- [ ] Version-exclusive filtering works correctly.
- [ ] Legendary filtering works correctly.
- [ ] Pokémon can be added to the party.
- [ ] Pokémon can be removed from the party.
- [ ] Party cannot exceed six Pokémon.
- [ ] Clear Party works correctly.
- [ ] Clear Party hides when the party becomes empty.
- [ ] Party count stays accurate.
- [ ] Available Pokémon count stays accurate.
- [ ] Weak / Resist / Immune / Neutral totals are correct.
- [ ] Empty-party behavior works correctly.
- [ ] Changing filters and showing Pokémon repeatedly does not produce stale state.
- [ ] Refreshing/reloading the application works correctly.

## Production Build

- [ ] Run a clean production build.
- [ ] Verify `npm run build` completes without errors.
- [ ] Verify `/dist` contains the expected application assets.
- [ ] Test the production build.
- [ ] Verify local sprite assets load.
- [ ] Verify generation JSON loads.
- [ ] Verify root-relative `/data/...` paths.
- [ ] Deploy v0.8 to the hosted demo.
- [ ] Perform a quick regression test against the deployed version.

---

# ♿ v0.9 — Accessibility & Release Readiness

Focus: perform the dedicated accessibility pass and resolve issues before the stable Gen I release.

## Manual Accessibility Testing

- [ ] Test keyboard-only navigation.
- [ ] Verify Tab navigation follows a sensible order.
- [ ] Test adding Pokémon using the keyboard.
- [ ] Test removing Pokémon using the keyboard.
- [ ] Test Clear Party using the keyboard.
- [ ] Test form controls using the keyboard.
- [ ] Test with a screen reader such as VoiceOver or NVDA.
- [ ] Verify visible focus indicators.
- [ ] Verify sufficient color contrast.
- [ ] Verify hover, focus and disabled states remain understandable.

## Semantic HTML / ARIA

- [x] Use semantic `<header>`, `<main>`, and `<footer>` landmarks.
- [x] Use labels for generation and filter controls.
- [ ] Review whether party Pokémon should use `<button>` elements instead of clickable `<div>` elements.
- [ ] Review available Pokémon interaction semantics.
- [ ] Add `aria-live` where useful for changing party/results information.
- [ ] Verify sprite `alt` text.
- [ ] Verify disabled generation-dependent controls are announced clearly.
- [ ] Verify defensive matchup table headings and structure.
- [ ] Add a table caption if appropriate.

## Accessibility Tools

- [ ] Run Axe DevTools against the application.
- [ ] Run accessibility checks against the production deployment.
- [ ] Review browser accessibility inspector results.
- [ ] Fix issues that should block the stable release.
- [ ] Re-test after fixes.

## Final Release Readiness

- [ ] Perform final Gen I regression test after accessibility changes.
- [ ] Verify there are no known critical console errors.
- [ ] Verify production build again.
- [ ] Verify deployed application.
- [ ] Review TODO for anything that genuinely blocks v1.0.

---

# 📚 v0.9 / v1.0 Documentation

Complete documentation as part of the final release-readiness work.

## README

- [x] Document `generations.json`.
- [x] Document generation-specific JSON files.
- [x] Document data-driven versions and sprite sets.
- [x] Document JSON-based weakness calculations.
- [x] Add “How to use the app.”
- [x] Explain Weak / Resist / Immune / Neutral analysis.
- [x] Credit the PokeAPI sprites repository.
- [x] Mention support targets latest stable browser versions.
- [ ] Remove any remaining double-click instructions.
- [ ] Add screenshot of the updated Pico interface.
- [ ] Add screenshot showing a completed six-Pokémon party.
- [ ] Add screenshot showing the defensive matchup table.
- [ ] Document local production-build steps.
- [ ] Document deployment steps.

---

# 🎉 v1.0 — Generation I Stable

The first stable public release.

## Release Requirements

- [x] Gen I Pokémon data loaded from JSON.
- [x] Gen I versions loaded from JSON.
- [x] Gen I sprite sets loaded from JSON.
- [x] Generation-aware architecture.
- [x] Generic version-exclusivity filtering.
- [x] Pokémon defensive values sourced from generation JSON.
- [x] Team Weak / Resist / Immune / Neutral analysis.
- [x] Pico CSS interface.
- [x] Polished Pokémon results display.
- [x] Polished six-member party display.
- [x] Polished defensive matchup table.
- [ ] Graceful loading/data errors.
- [ ] Complete Gen I regression testing.
- [ ] Complete accessibility pass.
- [ ] Complete README/screenshots.
- [ ] Verify final production deployment.
- [ ] Create/tag **v1.0.0** stable release.

---

# 🔧 v1.0.1 — Dependency & Tooling Maintenance

Focus: update development dependencies after the Generation I stable release without mixing major tooling changes into v1.0.

## Dependency Updates

- [ ] Review and update `@eslint/js` from 9.x to 10.x.
- [ ] Review and update ESLint from 9.x to 10.x.
- [ ] Review and update `globals` from 16.x to 17.x.
- [ ] Review and update Stylelint from 16.x to 17.x.
- [ ] Review and update `stylelint-config-standard` from 38.x to 40.x.
- [ ] Review and update Vite from 6.x to 8.x.
- [ ] Run `npm outdated` after updates.
- [ ] Run `npm audit`.
- [ ] Review configuration changes required by major-version upgrades.

---

## Verification

- [ ] Run linting successfully.
- [ ] Run Stylelint successfully.
- [ ] Run `npm run build` successfully.
- [ ] Test the application locally.
- [ ] Verify Generation I data loads correctly.
- [ ] Verify Pokémon filtering works correctly.
- [ ] Verify party add/remove/clear behavior.
- [ ] Verify team defensive analysis.
- [ ] Verify production build assets and data paths.
- [ ] Deploy updated build.
- [ ] Smoke-test the production deployment.

## Linting Cleanup

- [ ] Resolve remaining Stylelint naming issue for `#partyDisplay`.
  - Decide whether to rename it to `#party-display` throughout HTML/CSS/JavaScript.
  - Alternatively, adjust the Stylelint rule if camelCase IDs remain the project convention.
- [ ] Confirm `npm run lint` completes with no errors.

# 🧬 v1.1.0 — Generation II

Focus: add Gold, Silver, and Crystal primarily through data rather than generation-specific JavaScript.

> Goal: adding Gen II should mostly be a data task. Avoid generation-specific JavaScript unless the game mechanics genuinely require it.

## Generation Data

- [ ] Review and complete `gen2.json`.
- [ ] Add/verify Gen II display metadata.
- [ ] Add/verify Gold, Silver, and Crystal version data.
- [ ] Add/verify Gen II sprite sets and local sprite paths.
- [ ] Verify all Gen II Pokémon entries.
- [ ] Verify Dark and Steel defensive values.
- [ ] Verify Gen II evolution metadata.
- [ ] Verify version exclusives.

## Integration

- [ ] Test switching between Generation I and Generation II.
- [ ] Confirm switching generations clears incompatible party state safely.
- [ ] Confirm generic version filtering works.
- [ ] Confirm generic final-evolution filtering works.
- [ ] Confirm generic trade-evolution filtering works.
- [ ] Confirm generic legendary filtering works.
- [ ] Confirm team defensive analysis works with Gen II.
- [ ] Confirm no Gen II-specific JavaScript is required unnecessarily.

## Documentation

- [ ] Add Gen II screenshots.
- [ ] Update README for Generation II.
- [ ] Update supported-generation documentation.

---

# 🌍 v1.2 — Generation III

Focus: add Ruby, Sapphire, and Emerald using the existing generation architecture.

- [ ] Create `gen3.json`.
- [ ] Add Gen III Pokémon data.
- [ ] Add Ruby/Sapphire/Emerald version metadata.
- [ ] Add Gen III sprite sets and local sprite paths.
- [ ] Add Gen III defensive matchup data.
- [ ] Add/verify Gen III evolution metadata.
- [ ] Add/verify version exclusives.
- [ ] Test all generic filters against Gen III.
- [ ] Test party behavior with Gen III.
- [ ] Test defensive matchup analysis with Gen III.
- [ ] Add Gen III screenshots/documentation.
- [ ] Consider region filtering only if it provides useful behavior beyond the generation selector.

---

# 🔮 Future Features

These features are **not required for the Generation I stable release** and can be considered for later releases.

## Team Analysis

- [ ] Sort defensive matchup table so the largest weaknesses appear first.
- [ ] Add subtle status styling to Weak / Resist / Immune values.
- [ ] Show individual Pokémon defensive analysis.
- [ ] Show exact defensive multipliers such as `4×`, `2×`, `½×`, and `¼×`.
- [ ] Identify which party members create each weakness/resistance.
- [ ] Add optional team suggestion logic.

## Pokémon Information

- [ ] Add individual Pokémon details panel.
- [ ] Add optional Pokédex/detail view.
- [ ] Add Pokédex links using generation `serebiiDex` data.

## Performance

- [x] Load generation Pokémon data only after a generation is selected.
- [x] Load selected generation data once and pass it to party/team modules.
- [ ] Avoid refetching the same generation unnecessarily.
- [ ] Consider caching previously loaded generations in memory.
- [ ] Consider sprite lazy-loading if later generations noticeably increase page weight.
- [ ] Consider offline-first/PWA support.

## Code Organization

- [ ] Consider adding `src/js/generation.js` if `ui.js` becomes too large.
  - Load selected generation.
  - Populate sprite options.
  - Populate version options.
  - Update generation title/description.
  - Keep `ui.js` focused mainly on event listeners.
- [x] Review `type-utils.js` after removal of the old JavaScript type chart.
- [x] Remove `types.js` after confirming nothing depends on it.

## Data Validation

- [ ] Consider JSON validation for generation data.
- [ ] Consider a shared schema describing `gen1.json`, `gen2.json`, etc.
- [ ] Consider automated JSON validation in CI.

---

# 🛠️ Future Development Tooling

These are useful improvements but are **not v1.0 blockers**.

## Linting / Formatting

- [ ] Evaluate replacing HTMLHint with `eslint-plugin-html`.
- [ ] Consider Prettier for HTML, JavaScript, CSS, JSON, and Markdown.

## Automated Testing

- [ ] Consider Vitest for JavaScript unit tests.
- [ ] Add tests for generation data loading.
- [ ] Add tests for version-exclusivity filtering.
- [ ] Add tests for final-evolution filtering.
- [ ] Add tests for legendary filtering.
- [ ] Add tests for trade-evolution filtering.
- [ ] Add tests for weakness/resistance/immunity aggregation.
- [ ] Add tests ensuring generation switching clears incompatible party state.
- [ ] Consider Playwright for browser-level integration testing.
- [ ] Consider `axe-playwright` or `jest-axe` for automated accessibility testing.

## CI

- [ ] Integrate linting into GitHub Actions.
- [ ] Consider automated accessibility checks.
- [ ] Consider Lighthouse CI.
- [ ] Consider automated JSON validation.

---

# 📘 Optional Community Documentation

Useful if outside contributions increase.

- [ ] Add contribution guidelines.
  - Installing dependencies.
  - Running the development server.
  - Linting/testing/formatting.
  - Generation JSON conventions.
  - Adding a new generation.
- [ ] Add a data-contribution guide.
- [x] Maintain generated JSDoc API documentation.