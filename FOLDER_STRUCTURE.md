# 📁 Full Folder Structure

```
├── index.html              – Main HTML page  
├── src/ 
│   ├── js/                 – Modular JS source files  
│   │   ├── main.js         – Entry point importing all modules  
│   │   ├── ui.js           – Handles UI interactions and events  
│   │   ├── state.js        – DOM element selectors and global state  
│   │   ├── fetch.js        – Data fetching and rendering logic  
│   │   ├── party.js        – Manages the team/party list and display  
│   │   ├── team.js         – Calculates team type weaknesses  
│   │   ├── display.js      – Renders the team weakness table  
│   │   └── type-utils.js   – Utility for type effectiveness calculations  
│   └── css/                – Tailwind CSS styles  
│       └── style.css       – Main stylesheet (imports Tailwind base/components/utilities)  
├── public/ 
│   ├── data/               – Pokémon data files (Gen 1 and 2)  
│   │   ├── gen1.json       – Pokédex data for Generation 1 Pokémon  
│   │   └── gen2.json       – Pokédex data for Generation 2 Pokémon (planned)  
│   └── img/                – Sprite images (manually added)  
│       ├── generation-i/   – Folder for Gen 1 sprites  
│       └── generation-ii/  – Folder for Gen 2 sprites  
├── docs/                   – JSDoc generated documentation (HTML files)  
├── package.json            – Project metadata and scripts  
├── tailwind.config.js      – Tailwind CSS configuration  
├── postcss.config.cjs      – PostCSS/Tailwind integration  
├── eslint.config.js        – ESLint configuration  
├── .stylelintrc            – Stylelint configuration  
├── jsdoc.json              – JSDoc configuration  
└── README.md               – Project README
```
