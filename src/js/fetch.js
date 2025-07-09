/**
 * @file fetch.js
 * @description Handles fetching and rendering Pokémon data.
 * 
 * - `fetchDexEntries()` retrieves Pokémon data from a JSON file.
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
 * Fetches the Gen 1 Pokédex entries from a local JSON file.
 * @returns {Promise<Object>} A Promise resolving to parsed Dex data including images and Pokémon.
 */
export async function fetchDexEntries() {
  const response = await fetch('data/gen1.json');
  return await response.json();
}

/**
 * Renders filtered Pokémon sprites based on selected version, evolution, and other options.
 * Appends the images to the results container.
 *
 * @param {Object} dexResults - The full Dex dataset including image base path and Pokémon list
 * @returns {void}
 */
export function ViewPokemon(dexResults) {
  let imageSrc = dexResults['imageSrc'] + selectedSprites.value + '/transparent/';
  let pokemon = dexResults['pokemon'];
  let htmlPosition = 'beforeend';

  // Clear previous content first
  results.innerHTML = '';

  // Insert heading at the top
  results.insertAdjacentHTML('beforeend', '<h2 class="block">Available Pokémon</h2>');

  for (let entry in pokemon) {
    let dexId = pokemon[entry]['dexId'];
    const tradeEvolve = pokemon[entry]['evolve']['trade'];
    let name = pokemon[entry]['name'];
    let finalForm = pokemon[entry]['finalForm'];
    let isLegendary = pokemon[entry]['isLegendary'];
    let types = pokemon[entry]['types'].join();
    let unobtainable = pokemon[entry]['unobtainable'];

    // eslint-disable-next-line no-unused-vars
    let parsedDexID = parseInt(dexId);

    // eslint-disable-next-line no-unused-vars
    let showObtainable = true;

    let imageName = dexId.replace(/^0+/, '');
    let pokedexResults = `<span><img src="${imageSrc + imageName}.png" alt="${name}" data-name="${name}" data-types="${types}" data-pokdex="${dexId}"></span>`;

    // Apply user-selected filters
    if (selectedLegendary.value === 'no' && isLegendary) continue;
    if (selectedEvolve.value === 'yes' && tradeEvolve) continue;

    if (
      (selectedVersion.value === 'red' && unobtainable.includes('red')) ||
      (selectedVersion.value === 'blue' && unobtainable.includes('blue')) ||
      (selectedVersion.value === 'yellow' && unobtainable.includes('yellow'))
    ) {
      if (selectedUnobtainable.value === 'yes') continue;
    }

    if (selectedEvolution.value === 'yes' && !finalForm) continue;

    results.insertAdjacentHTML(htmlPosition, pokedexResults);
  }
}
