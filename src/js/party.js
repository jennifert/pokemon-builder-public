/**
 * @file party.js
 * @description Manages the user's party of up to 6 Pokémon.
 * - Handles display rendering for each Pokémon
 * - Provides logic for clearing the party
 * - Analyzes type effectiveness via utility modules
 */

import { selectedSprites } from './state.js';

/** @constant {number} maxPartySize - The maximum allowed number of Pokémon in a party */
export const maxPartySize = 6;

/**
 * @type {string[]}
 * @description An array of Pokémon dex IDs currently in the party.
 */
export const party = [];

/**
 * Updates the party display area with current party Pokémon.
 *
 * @param {Object|null} generationData
 * @returns {void}
 */
export function updatePartyDisplay(generationData) {

  const container = document.getElementById('partyDisplay');
  container.innerHTML = '';

  if (!generationData) {
    container.innerHTML = '<em>(empty)</em>';
    return;
  }

  const imageBase =
    generationData.imageSrc +
    selectedSprites.value +
    '/transparent/';

  const pokemonList = generationData.pokemon;

  for (const dexId of party) {
    const mon = pokemonList.find(
      pokemon => pokemon.dexId === dexId
    );

    if (!mon) continue;

    const name = mon.name;

    const imageName =
      dexId.replace(/^0+/, '');

    const sprite =
      `${imageBase}${imageName}.png`;

    container.innerHTML += `
      <div
        class="party-info"
        data-dexid="${dexId}"
        role="button"
        tabindex="0"
        aria-label="Click to remove ${name} from your party"
        title="Click to remove"
      >
        <img src="${sprite}" alt="${name}" />

        <div class="party-info-name">
          ${name}
        </div>
      </div>
    `;
  }

  if (party.length === 0) {
    container.innerHTML += '<em>(empty)</em>';
  }
}

/**
 * Clears all Pokémon from the party and hides the Clear Party button.
 * Also re-renders the (empty) party area.
 * @returns {void}
 */
export function clearParty(generationData) {
  party.length = 0;

  document
    .getElementById('clearParty')
    .classList.add('hidden');

  updatePartyDisplay(generationData);
}