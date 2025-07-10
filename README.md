# Pokémon Team Builder

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![PostCSS](https://img.shields.io/badge/PostCSS-8-dd3a0a?logo=postcss)](https://postcss.org/)
![Frontend](https://img.shields.io/badge/frontend-Vanilla_JS-yellow)
[![Node.js](https://img.shields.io/badge/Node.js-22.16.0-brightgreen?logo=nodedotjs)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10.9.2-red?logo=npm)](https://www.npmjs.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9-blue?logo=eslint&logoColor=white)](https://eslint.org/)
[![Stylelint](https://img.shields.io/badge/Stylelint-16-263238?logo=stylelint&logoColor=white)](https://stylelint.io/)
![Build with Vite](https://img.shields.io/badge/bundler-Vite-646CFF)
![JSDoc](https://img.shields.io/badge/docs-JSDoc-informational?logo=javascript&labelColor=555&color=F7DF1E)


A modular, offline-capable team-building tool for Pokémon Red, Blue, and Yellow. Built for accuracy, accessibility, and long-term expansion.

---

## 📄 License

This project is licensed under the **MIT License**.

- ✅ Use, copy, modify, merge, publish, distribute
- ✅ No attribution required (but appreciated)
- ❌ No warranty included — use at your own risk

---

## ⚠️ Pokémon Sprite Usage

All Pokémon names, images, and data are © Nintendo, Game Freak, and The Pokémon Company.

This project references publicly available sprite assets hosted by the [PokeAPI sprite repository](https://github.com/PokeAPI/sprites) for educational and fan use only.

This project does **not** distribute or claim ownership of any Pokémon intellectual property.

---

## 🛠 Tech Stack

- **Frontend:** HTML + Vanilla JS (modules), Tailwind CSS
- **Bundler:** Vite
- **Linting:** ESLint, Stylelint (Tailwind-aware), HTMLHint
- **Accessibility:** axe-core CLI

### Version Information

- Tailwind CSS: 3.4.17
- PostCSS: 8.5.5
- ESLint: 9.28.0

---

## 📦 Prerequisites

- Node.js: 22.16.0
- NPM: 10.9.2
- Git CLI
- Optionally: [VS Code](https://code.visualstudio.com/) with ESLint, Tailwind extensions

## 🖥 Browser Support

This project targets the last 2 versions of:

- Chrome
- Firefox
- Safari
- Edge

Defined via [Browserslist](https://github.com/browserslist/browserslist) for PostCSS and future compatibility tooling.

---

## ⚙️ Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/jennifert/pokemon-builder-public.git
cd pokemon-builder
```

2. **Download Sprites Locally**

Sprites are not bundled with this project due to copyright.

Instead, download them manually from the PokeAPI sprites repo:

```bash
git clone https://github.com/PokeAPI/sprites.git
```

Then copy the following folders into your local project directory. Please note generation-ii is for future:
```
sprites/sprites/pokemon/versions/generation-i
sprites/sprites/pokemon/versions/generation-ii
```

Paste them under:
```
pokemon-builder/public/img/
```

You should now have:
```
pokemon-builder/public/img/generation-i
pokemon-builder/public/img/generation-ii
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

## 📁 Project Structure (Summary)

```
├── index.html  
├── src/  
│   ├── js/       – Core logic modules  
│   └── css/      – Tailwind styles  
├── public/       – Static assets (data, sprites)  
├── docs/         – JSDoc output  
├── config/       – ESLint, Tailwind, PostCSS configs  
├── package.json  
└── README.md
```

🔍 [View full folder structure ›](FOLDER_STRUCTURE.md)



---

## 📜 NPM Scripts

| Command            | Description                                 |
|--------------------|---------------------------------------------|
| `npm run dev`      | Start local Vite server                     |
| `npm run build`    | Create production build                     |
| `npm run preview`  | Preview production build                    |
| `npm run lint:js`  | Run ESLint on JS files                      |
| `npm run lint:jsFix` | Auto-fix lint issues in JS                |
| `npm run lint:css` | Run Stylelint on CSS                        |
| `npm run lint:html`  | Run HTMLHint on index.html                |
| `npm run a11y:dev` | Run axe-core against dev URL                |
| `npm run a11y:prod`| Run axe-core against built site             |
| `npm run docs`| Run JSDoc to create documentation from JS        |

---

## 📘 Documentation

- [`TODO.md`](./TODO.md) — Full roadmap and implementation plan
- [`docs/`](./docs/) — Auto-generated [JSDoc](https://jsdoc.app/) documentation for all source files

### 🧩 Code Design Notes

Some variables like `parsedDexID` and `showObtainable` may appear unused in certain modules (e.g. `fetch.js`) but are included intentionally for modular consistency or future extension.

```js
// eslint-disable-next-line no-unused-vars
let parsedDexID = parseInt(dexId);

// eslint-disable-next-line no-unused-vars
let showObtainable = true;
```

These lines are preserved because:

- They match the data contract across modules or views
- Related logic may live in another file (e.g., filtering, state management)
- They are reserved for future enhancements (like toggling unobtainables or formatting dex IDs)

Rather than removing them (and risking regression or inconsistency), they’re explicitly retained with `eslint-disable-next-line` for clarity and long-term maintainability.

### 📌 TODO Highlights

- Improve type effectiveness formatting (`2×`, `0.5×`, etc.)
- Add Pokédex view using `serebiiDex` URLs
- Offline-first support (PWA optional)
- Gen 2 support after Gen 1 polish
- Team suggestion logic (future AI assist)
- Support Gen 2+ once Gen 1 is finalized


### 🧪 JSDoc Reference

This project uses [JSDoc](https://jsdoc.app/) to generate documentation from code comments.

- [Live API Docs](https://jennifert.github.io/pokemon-builder-public-docs/) — Auto-generated [JSDoc](https://jsdoc.app/) documentation

#### To regenerate documentation locally:

```bash
npm run docs
```

This will populate the `/docs` folder with up-to-date HTML documentation.

#### 📖 How it's structured:
- Each JS module (like `party.js`, `team.js`) includes detailed descriptions, parameters, and return types
- Comments follow the [JSDoc standard](https://jsdoc.app/about-getting-started.html)

---

## :gem: Acknowledgments

This project would not be possible without these fantastic community resources:

- [Shields.io](https://shields.io/) — For README badges
- [Awesome README](https://github.com/matiassingers/awesome-readme) — For formatting inspiration
- [PokeAPI Sprites](https://github.com/PokeAPI/sprites) — Source of Pokémon sprite art
- [Bulbapedia](https://bulbapedia.bulbagarden.net/) — Mechanics reference and bug documentation
- [Serebii.net](https://www.serebii.net/) — Dex data, locations, and availability info
