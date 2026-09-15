# Pokémon Team Builder — TODO & Roadmap

This document tracks development tasks by planned release.

**v1.0** completed the original Generation I application using Vanilla JavaScript, Vite, Pico CSS, and JSON-based generation data.

Beginning with **v1.1**, the application will move to **Next.js, API routes, and SQLite**. The database will provide a shared National Pokédex and generation-aware data model so later generations, forms, type changes, Mega Evolutions, and other mechanics can be added without maintaining increasingly complex generation-specific JSON files.

---

# 🏗️ v1.1.0 — Next.js, API & Database Migration

Focus: migrate the stable Generation I application to Next.js and SQLite before adding additional generations.

> Goal: preserve the existing Generation I functionality while replacing the JSON-based data architecture with a relational, generation-aware data model.

## Next.js Migration

- [ ] Create the Next.js application structure.
- [ ] Migrate the existing Pico CSS interface.
- [ ] Migrate Generation I filtering and party behavior.
- [ ] Migrate defensive team analysis.
- [ ] Preserve existing accessibility behavior.
- [ ] Remove Vite-specific configuration after migration is complete.

## SQLite Database

- [ ] Add SQLite database support.
- [ ] Create database initialization/schema tooling.
- [ ] Create a National Pokédex Pokémon table.
- [ ] Create generation data.
- [ ] Create game/version data.
- [ ] Create type data.
- [ ] Create generation-aware Pokémon typing data.
- [ ] Create Pokémon availability/version data.
- [ ] Create evolution-related data required by existing filters.
- [ ] Design support for alternate forms.
- [ ] Design support for Mega Evolutions and future generation-specific mechanics.
- [ ] Import existing Generation I JSON data into SQLite.
- [ ] Validate imported Generation I data against the v1.0 dataset.

## API / Data Layer

- [ ] Add API routes for Pokémon data.
- [ ] Add API routes for generations.
- [ ] Add API routes for versions.
- [ ] Add API routes for types and defensive matchup data.
- [ ] Move database queries into a reusable data layer.
- [ ] Keep UI components independent from direct SQLite access.
- [ ] Add consistent API error handling.
- [ ] Ensure production Pokémon data is read-only through the public application.

## Gen I Regression Testing

- [ ] Verify all 151 Generation I Pokémon.
- [ ] Verify Red/Blue/Yellow filtering.
- [ ] Verify sprite selection.
- [ ] Verify final-evolution filtering.
- [ ] Verify trade-evolution filtering.
- [ ] Verify version-exclusive filtering.
- [ ] Verify legendary filtering.
- [ ] Verify party add/remove/clear behavior.
- [ ] Verify six-Pokémon party limit.
- [ ] Verify defensive matchup calculations.
- [ ] Verify keyboard and screen-reader behavior.
- [ ] Run automated accessibility checks.
- [ ] Verify production deployment.

## Cleanup

- [ ] Remove generation JSON files once database migration is verified.
- [ ] Remove obsolete JSON loading utilities.
- [ ] Remove obsolete Vite files and dependencies.
- [ ] Update README for Next.js development.
- [ ] Document database initialization.
- [ ] Document API/data architecture.
- [ ] Update deployment documentation.

---

# 🧬 v1.2.0 — Generation II

Focus: add Gold, Silver, and Crystal using the new database-driven architecture.

> Goal: adding Generation II should primarily require adding data rather than generation-specific application logic.

- [ ] Add Generation II Pokémon availability.
- [ ] Add Gold, Silver, and Crystal version data.
- [ ] Add Generation II sprite data/assets.
- [ ] Add Dark and Steel types.
- [ ] Add generation-aware type changes for existing Pokémon.
- [ ] Add/verify Generation II evolution metadata.
- [ ] Add/verify version exclusives.
- [ ] Test switching between Generation I and Generation II.
- [ ] Verify generic filters against Generation II.
- [ ] Verify defensive analysis against Generation II.
- [ ] Update screenshots and documentation.

---

# 🧚 v1.3.0 — Generation VI

Focus: introduce Generation VI and establish support for Fairy typing, Mega Evolution, and forms.

> Goal: solve the major data-model changes required by later generations before backfilling Generations III–V.

- [ ] Add Generation VI Pokémon.
- [ ] Add X and Y version data.
- [ ] Add Fairy type.
- [ ] Add generation-aware Fairy type changes to older Pokémon.
- [ ] Add Mega Evolution data.
- [ ] Add Mega Evolution forms and typings.
- [ ] Verify alternate-form handling.
- [ ] Verify type calculations with Fairy.
- [ ] Verify Pokémon whose types changed between generations.
- [ ] Verify Mega Evolution display and team analysis.
- [ ] Update screenshots and documentation.

---

# 🌍 v1.4.0 — Generation III

Focus: add Ruby, Sapphire, and Emerald using the established database architecture.

- [ ] Add Generation III Pokémon.
- [ ] Add Ruby, Sapphire, and Emerald version data.
- [ ] Add Generation III sprite data/assets.
- [ ] Add Generation III Pokémon availability.
- [ ] Add/verify evolution metadata.
- [ ] Add/verify version exclusives.
- [ ] Ensure Fairy-type changes introduced in Generation VI do not apply to Generation III.
- [ ] Test generic filters.
- [ ] Test party behavior.
- [ ] Test defensive matchup analysis.
- [ ] Update screenshots and documentation.

---

# 🌍 Later Generations

Continue adding generations using the shared National Pokédex and generation-aware database architecture.

Planned order:

- **v1.5.0 — Generation IV**
- **v1.6.0 — Generation V**
- **Later v1.x releases — Generations VII, VIII, and IX**

Each generation should primarily extend database content. New application logic should only be introduced when a generation adds mechanics that cannot be represented by the existing data model.

---

# 🔮 Future Features

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
- [ ] Add generation/version-aware links to external Serebii Pokédex entries.

## Performance

- [ ] Review API response caching where appropriate.
- [ ] Avoid unnecessary repeated database queries.
- [ ] Consider sprite lazy-loading as supported generations increase.
- [ ] Consider offline/PWA support where compatible with the application architecture.

## Database / Data Validation

- [ ] Add validation for database seed/import data.
- [ ] Add database integrity checks.
- [ ] Test generation-aware Pokémon typing.
- [ ] Test version availability data.
- [ ] Test form and Mega Evolution relationships.
- [ ] Add automated database validation to CI.

---

# 🛠️ Future Development Tooling

## Linting / Formatting

- [ ] Consider Prettier for HTML/JSX, JavaScript, CSS, JSON, SQL, and Markdown.

## Automated Testing

- [ ] Add unit tests for the data/query layer.
- [ ] Add tests for API routes.
- [ ] Add tests for generation filtering.
- [ ] Add tests for version-exclusivity filtering.
- [ ] Add tests for final-evolution filtering.
- [ ] Add tests for legendary filtering.
- [ ] Add tests for trade-evolution filtering.
- [ ] Add tests for weakness/resistance/immunity aggregation.
- [ ] Add tests ensuring generation switching clears incompatible party state.
- [ ] Add tests for generation-specific typing changes.
- [ ] Consider Playwright for browser-level integration testing.
- [ ] Consider `axe-playwright` or equivalent for automated accessibility testing.

## CI

- [ ] Integrate linting into GitHub Actions.
- [ ] Consider automated accessibility checks.
- [ ] Consider Lighthouse CI.
- [ ] Add automated database/data validation.

---

# 📘 Optional Community Documentation

Useful if outside contributions increase.

- [ ] Add contribution guidelines.
  - Installing dependencies.
  - Running the development server.
  - Linting/testing/formatting.
  - Database setup.
  - Adding Pokémon/generation data.
  - Adding a new generation.
- [ ] Add a data-contribution guide.
- [x] Maintain generated API documentation where appropriate.