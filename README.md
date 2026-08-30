# Pokémon Team Builder

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Architecture](https://img.shields.io/badge/Architecture-Data--Driven-success)
[![Frontend](https://img.shields.io/badge/frontend-Vanilla_JS-yellow)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Pico CSS](https://img.shields.io/badge/CSS-Pico-1095C1)](https://picocss.com/)
[![Data](https://img.shields.io/badge/Data-JSON-success)](https://www.json.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9-blue?logo=eslint&logoColor=white)](https://eslint.org/)
[![Stylelint](https://img.shields.io/badge/Stylelint-16-263238?logo=stylelint&logoColor=white)](https://stylelint.io/)
[![JSDoc](https://img.shields.io/badge/Docs-JSDoc-F7DF1E?logo=javascript&logoColor=black)](https://jsdoc.app/)

A modular, data-driven Pokémon team builder built with vanilla JavaScript, Vite, and Pico CSS.

The application is designed around reusable generation data files, allowing new Pokémon generations to be added primarily through JSON rather than JavaScript changes.

## ✨ Features

- Data-driven generation support
- Offline-capable
- Modular ES Modules architecture
- Team defensive matchup analysis
- Version-exclusive filtering
- Trade evolution filtering
- Final evolution filtering
- Local sprite support
- Responsive Pico CSS interface

## 🚧 Project Status

Current Development Version: **0.9.0**

Implemented:

- Generation I
- Dynamic generation loading
- Data-driven architecture
- Team defensive analysis
- Version and evolution filtering
- Pico CSS responsive interface
- Keyboard-accessible Pokémon and party controls
- Automated accessibility testing with axe-core
- Accessible defensive matchup table
- Screen reader testing
- Final accessibility verification

In Progress:

- Generation I stable-release preparation

Generation II support is planned for **v1.1.0**, after the Generation I stable release.

### Release Roadmap

- **v0.8.0** — Generation I final features, cleanup, and testing
- **v0.9.0** — Accessibility and release readiness
- **v1.0.0** — Generation I stable release
- **v1.0.x** — Maintenance releases, including dependency and tooling updates
- **v1.1.0** — Generation II
- **v1.2.0** — Generation III

Patch releases such as `v1.0.1` are reserved for maintenance, bug fixes,
dependency updates, and tooling improvements that do not introduce a new
Pokémon generation.

## 📄 License

This project is licensed under the **MIT License**.

- ✅ Use, copy, modify, merge, publish, distribute
- ✅ No attribution required (but appreciated)
- ❌ No warranty included — use at your own risk

## ⚠️ Pokémon Sprite Usage

All Pokémon names, images, and data are © Nintendo, Game Freak, and The Pokémon Company.

This project references publicly available sprite assets hosted by the [PokeAPI sprite repository](https://github.com/PokeAPI/sprites) for educational and fan use only.

This project does **not** distribute or claim ownership of any Pokémon intellectual property.

## 🛠 Tech Stack

- Frontend: HTML5 + Vanilla JavaScript (ES Modules)
- Styling: Pico CSS + application-specific CSS
- Bundler: Vite
- Data: JSON
- Documentation: JSDoc
- Linting: ESLint, Stylelint, html-validate
- Accessibility: axe-core CLI

### Version Information

- Pico.css: 2.1.1
- ESLint: 9.28.0


## 📦 Prerequisites

- Node.js: 22.16.0
- NPM: 10.9.2
- Git CLI
- Optionally: [VS Code](https://code.visualstudio.com/)

## 🖥 Browser Support

This project targets the last 2 versions of:

- Chrome
- Firefox
- Safari
- Edge

Defined via [Browserslist](https://github.com/browserslist/browserslist) for browser compatibility and future tooling.

## ⚙️ Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/jennifert/pokemon-builder-public.git
cd pokemon-builder-public
```

2. **Download Sprites Locally**

Sprites are not bundled with this project due to copyright.

Instead, download them manually from the PokeAPI sprites repo:

```bash
git clone https://github.com/PokeAPI/sprites.git
```

Then copy the Generation I sprite folder into your local project directory:
```
sprites/sprites/pokemon/versions/generation-i
```

Paste them under:
```
pokemon-builder/public/img/
```

You should now have:
```
pokemon-builder-public/public/img/generation-i
```

3. **Install Dependencies**
```bash
npm install
```

4. **Start Development Server**
```bash
npm run dev
```

5. **Open in Browser**
```
http://localhost:5173
```

## 📁 Project Structure

```text
.
├── index.html                  # Main application page
│
├── src/
│   ├── js/
│   │   ├── main.js             # Application entry point
│   │   ├── ui.js               # UI events and application flow
│   │   ├── state.js            # Shared DOM references and application state
│   │   ├── fetch.js            # Loads Pokémon generation data
│   │   ├── party.js            # Manages the player's party
│   │   ├── team.js             # Calculates team defensive analysis
│   │   ├── display.js          # Renders analysis tables and UI output
│   │   └── type-utils.js       # Pokémon type-analysis utilities
│   │
│   └── css/
│       ├── pico.min.css        # Pico CSS framework (vendor file)
│       └── style.css           # Project-specific styles
│
├── public/
│   ├── data/
│   │   ├── generations.json    # Available Pokémon generations
│   │   ├── gen1.json           # Generation I game and Pokémon data
│   │   ├── gen2.json           # Generation II data (future support)
│   │   └── ...                 # Future generation data
│   │
│   └── img/
│       ├── generation-i/       # Generation I sprites
│       └── ...                 # Future generation sprites
│
├── docs/                       # Generated JSDoc documentation
│
├── package.json                # Project metadata and npm scripts
├── package-lock.json           # Locked dependency versions
├── vite.config.js              # Vite configuration (if present)
├── eslint.config.js            # ESLint configuration
├── .stylelintrc                # Stylelint configuration
├── jsdoc.json                  # JSDoc configuration
├── README.md                   # Project overview and usage
└── LICENSE                     # Project license
```

## 🏗 Architecture

The project follows a data-driven design.

Application logic lives under:

`src/`

Game data lives under:

`public/data/`

Each supported generation is represented by its own JSON file.

Example:

```text
generations.json
        │
        ▼
Enabled Generation
        │
        ▼
gen1.json

Future:
gen2.json
gen3.json
...
```

## 📷 Screenshots

### Team Builder

![Pokémon Team Builder interface](docs/images/team-builder.png)

### Completed Party

![Completed six-Pokémon party](docs/images/completed-party.png)

### Team Defensive Analysis

![Team defensive matchup analysis](docs/images/defensive-matchups.png)

## 🗃 Data-Driven Design

The project separates application logic from Pokémon data.

- `src/` contains reusable JavaScript modules.
- `public/data/` contains generation-specific game data.
- Adding a new generation should primarily involve creating a new JSON file rather than modifying JavaScript.
- `style.css` contains only project-specific styles, while `pico.min.css` provides the base UI framework.

## 📜 NPM Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run all configured linters |
| `npm run lint:js` | Run ESLint on JavaScript files |
| `npm run lint:css` | Run Stylelint on application CSS |
| `npm run lint:html` | Run html-validate on `index.html` |
| `npm run a11y` | Run the local accessibility scan |
| `npm run a11y:dev` | Run axe-core against the development site |
| `npm run a11y:prod` | Run axe-core against the production site |
| `npm run docs` | Generate JSDoc documentation |

## 📘 Documentation

- [`TODO.md`](./TODO.md) — Full roadmap and implementation plan
- [Live API Docs](https://jennifert.github.io/pokemon-builder-public-docs/) — Auto-generated [JSDoc](https://jsdoc.app/) documentation

## 🎯 Project Goals

This project aims to be:

- Data-driven
- Modular
- Easy to understand
- Easy to extend
- Friendly to beginners
- Offline capable
- Free and open source

Adding a new Pokémon generation should primarily involve creating new JSON data rather than rewriting application logic.


### 🧪 JSDoc Reference

This project uses [JSDoc](https://jsdoc.app/) to generate documentation from code comments.

#### To regenerate documentation locally:

```bash
npm run docs
```

This will populate the `/docs` folder with up-to-date HTML documentation.

#### 📖 How it's structured:
- Each JS module (like `party.js`, `team.js`) includes detailed descriptions, parameters, and return types
- Comments follow the [JSDoc standard](https://jsdoc.app/about-getting-started.html)

## 🚀 Using the Team Builder

1. Select a Pokémon generation.
2. Select a sprite set.
3. Select a game version.
4. Configure the desired filters.
5. Click **Show Pokémon**.
6. Select Pokémon to add or remove them from your party.
7. Review the team's defensive matchup table.

## ♿ Accessibility

Accessibility is being reviewed as part of the v0.9 release cycle before the
Generation I stable release.

Current accessibility work includes:

- Semantic HTML landmarks and form controls
- Keyboard-accessible Pokémon selection
- Visible keyboard focus indicators
- Accessible party controls
- ARIA live-region announcements for party changes
- Semantic defensive matchup table structure
- Decorative sprite handling
- Color contrast testing
- Automated axe-core testing
- Browser accessibility-tree inspection

Screen reader testing has been completed using VoiceOver on macOS, alongside keyboard testing and automated accessibility checks.

## :gem: Acknowledgments

This project would not be possible without these fantastic community resources:

- [Shields.io](https://shields.io/) — For README badges
- [Awesome README](https://github.com/matiassingers/awesome-readme) — For formatting inspiration
- [PokeAPI Sprites](https://github.com/PokeAPI/sprites) — Pokémon sprite repository
- [Bulbapedia](https://bulbapedia.bulbagarden.net/) — Mechanics reference and bug documentation
- [Serebii.net](https://www.serebii.net/) — Dex data, locations, and availability info
