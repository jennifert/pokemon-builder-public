/**
 * @file fetch.js
 * @description Handles loading, validating, filtering, and rendering Pokémon data.
 *
 * - `fetchGenerations()` retrieves the supported generation list.
 * - `fetchDexEntries()` retrieves and validates generation data.
 * - `ViewPokemon()` filters and displays Pokémon based on user-selected criteria.
 */
import {
  selectedSprites,
  selectedVersion,
  selectedEvolution,
  selectedLegendary,
  selectedEvolve,
  selectedUnobtainable,
  results
} from './state.js';

/**
 * Fetches the list of supported generations.
 *
 * @returns {Promise<Object>}
 */
export async function fetchGenerations() {
  const response = await fetch('/data/generations.json');

  if (!response.ok) {
    throw new Error('Unable to load the generation list.');
  }

  try {
    const data = await response.json();
    return validateGenerationList(data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        'The generation list contains invalid JSON.'
      );
    }

    throw error;
  }
}

/**
 * Validates required fields in generation data.
 *
 * @param {Object} data - Parsed generation JSON data
 * @returns {Object} Validated generation data
 * @throws {Error} If required generation data is missing
 */
function validateGenerationData(data) {
  if (
    !data ||
    typeof data !== 'object' ||
    typeof data.displayName !== 'string' ||
    typeof data.description !== 'string' ||
    typeof data.imageSrc !== 'string' ||
    !Array.isArray(data.spriteSets) ||
    !Array.isArray(data.versions) ||
    !Array.isArray(data.pokemon)
  ) {
    throw new Error(
      'The selected generation data is missing required information.'
    );
  }

  return data;
}

/**
 * Validates the supported generation list.
 *
 * @param {Object} data - Parsed generation JSON data
 * @returns {Object} Validated generation data
 * @throws {Error} If required generation data is missing
 */
function validateGenerationList(data) {
  if (
    !data ||
    typeof data !== 'object' ||
    !Array.isArray(data.generations)
  ) {
    throw new Error(
      'The generation list is missing required information.'
    );
  }
  return data;
}

/**
 * Fetches data for a selected Pokémon generation.
 *
 * @param {string} file - JSON filename for the selected generation
 * @returns {Promise<Object>}
 */
export async function fetchDexEntries(file) {
  const response = await fetch(`/data/${file}`);

  if (!response.ok) {
    throw new Error(`Unable to load ${file}.`);
  }

  try {
    const data = await response.json();
    return validateGenerationData(data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`The data in ${file} is not valid JSON.`);
    }

    throw error;
  }
}

/**
 * Renders filtered Pokémon sprites based on selected version, evolution, and other options.
 * Appends the images to the results container.
 *
 * @param {Object} dexResults - The full Dex dataset including image base path and Pokémon list
 * @returns {void}
 */
export function ViewPokemon(dexResults) {
  const imageSrc =
    dexResults['imageSrc'] +
    selectedSprites.value +
    '/transparent/';

  const pokemon = dexResults['pokemon'];
  const htmlPosition = 'beforeend';

  let matchingPokemon = 0;

  results.innerHTML = '';

  for (const entry in pokemon) {
    const dexId = pokemon[entry]['dexId'];
    const tradeEvolve = pokemon[entry]['evolve']['trade'];
    const name = pokemon[entry]['name'];
    const finalForm = pokemon[entry]['finalForm'];
    const isLegendary = pokemon[entry]['isLegendary'];
    const types = pokemon[entry]['types'].join();
    const unobtainable = pokemon[entry]['unobtainable'];

    const imageName = dexId.replace(/^0+/, '');
    const pokedexResults = `
      <button
        type="button"
        class="pokemon-result"
        data-name="${name}"
        data-types="${types}"
        data-pokdex="${dexId}"
        aria-pressed="false"
        aria-label="Add ${name} to party"
        title="Add ${name} to party"
      >
        <img
          src="${imageSrc + imageName}.png"
          alt=""
        >
        <span class="pokemon-result-name">${name}</span>
      </button>
    `;

    if (selectedLegendary.value === 'no' && isLegendary) continue;
    if (selectedEvolve.value === 'yes' && tradeEvolve) continue;

    if (
      selectedUnobtainable.value === 'yes' &&
      unobtainable.includes(selectedVersion.value)
    ) {
      continue;
    }

    if (selectedEvolution.value === 'yes' && !finalForm) continue;

    matchingPokemon += 1;

    results.insertAdjacentHTML(htmlPosition, pokedexResults);
  }

  results.insertAdjacentHTML(
    'afterbegin',
    `<h2>Available Pokémon (${matchingPokemon})</h2>`
  );
}