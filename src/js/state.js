/**
 * @file state.js
 * @description DOM state selectors shared across modules.
 * These provide access to user input fields and result containers.
 */

/**
 * @type {HTMLSelectElement}
 * @description Dropdown for choosing sprite style
 */
export const selectedSprites = document.getElementById('sprite');

/**
 * @type {HTMLSelectElement}
 * @description Version filter: red, blue, or yellow
 */
export const selectedVersion = document.getElementById('version');

/**
 * @type {HTMLSelectElement}
 * @description Filter for showing only final-evolution Pokémon
 */
export const selectedEvolution = document.getElementById('evolution');

/**
 * @type {HTMLSelectElement}
 * @description Filter for excluding legendary Pokémon
 */
export const selectedLegendary = document.getElementById('legends');

/**
 * @type {HTMLSelectElement}
 * @description Filter for excluding Pokémon that evolve by trade
 */
export const selectedEvolve = document.getElementById('evolve');

/**
 * @type {HTMLSelectElement}
 * @description Filter for hiding unobtainable Pokémon
 */
export const selectedUnobtainable = document.getElementById('unobtainable');

/**
 * @type {HTMLElement}
 * @description The container where filtered Pokémon are displayed
 */
export const results = document.getElementById('results');
