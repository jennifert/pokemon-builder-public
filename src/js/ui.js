/**
 * @file ui.js
 * @description Handles all DOM interactions for the Pokémon Team Builder:
 * - Loads supported generations
 * - Loads generation-specific data
 * - Populates generation-dependent form fields
 * - Loads results from selected filters
 * - Adds/removes Pokémon to/from party
 * - Updates party display and weakness analysis
 */

import { fetchGenerations, fetchDexEntries, ViewPokemon } from './fetch.js';
import { results,  selectedGeneration, selectedSprites, selectedVersion, generationOptions, generationTitle, generationDescription, generationInfo } from './state.js';
import { party, updatePartyDisplay, clearParty } from './party.js';
import { calculateTeamWeaknesses } from './team.js';

let currentGenerationData = null;

/**
 * Loads supported Pokémon generations and adds them
 * to the generation dropdown.
 */
async function loadGenerations() {
  const generationData = await fetchGenerations();

  for (const generation of generationData.generations) {
    const option = document.createElement('option');

    option.value = generation.file;
    option.textContent = generation.name;

    selectedGeneration.appendChild(option);
  }
}


/**
 * Populates the sprite dropdown using the currently
 * selected generation's JSON data.
 *
 * @param {Object} generationData
 */
function populateSpriteOptions(generationData) {
  selectedSprites.innerHTML = `
    <option selected disabled value="">
      Select sprite variation
    </option>
  `;

  for (const sprite of generationData.spriteSets) {
    const option = document.createElement('option');

    option.value = sprite.id;
    option.textContent = sprite.name;

    selectedSprites.appendChild(option);
  }
}


/**
 * Populates the game version dropdown using the currently
 * selected generation's JSON data.
 *
 * @param {Object} generationData
 */
function populateVersionOptions(generationData) {
  selectedVersion.innerHTML = `
    <option selected disabled value="">
      Select game version
    </option>
  `;

  for (const version of generationData.versions) {
    const option = document.createElement('option');

    option.value = version.id;
    option.textContent = version.name;

    selectedVersion.appendChild(option);
  }
}


/**
 * Loads generation-specific data when the user selects
 * a generation.
 */
selectedGeneration.addEventListener('change', async function () {
  currentGenerationData =
    await fetchDexEntries(selectedGeneration.value);

  populateSpriteOptions(currentGenerationData);
  populateVersionOptions(currentGenerationData);

  generationTitle.textContent =
    currentGenerationData.displayName;

  generationDescription.textContent =
    currentGenerationData.description;

  generationInfo.hidden = false;
  generationOptions.disabled = false;

  // Clear anything belonging to the previous generation.
  results.innerHTML = '';
  clearParty(currentGenerationData);
});


/**
 * Clears the current party when the Clear Party button is clicked.
 * Hides the button and refreshes team analysis.
 */
document
  .getElementById('clearParty')
  .addEventListener('click', () => {
    clearParty(currentGenerationData);

    calculateTeamWeaknesses(currentGenerationData);
  });


/**
 * Loads available Pokémon when the Team Form is submitted.
 * Prevents page reload and shows filtered Pokémon based
 * on selected options.
 */
document
  .getElementById('TeamForm')
  .addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (!currentGenerationData) {
      return;
    }

    results.innerHTML = '';

    ViewPokemon(currentGenerationData);
  });


/**
 * Adds or removes a Pokémon from the party when its sprite
 * is clicked in the results list.
 * Enforces a maximum party size of 6 Pokémon.
 */
results.addEventListener('click', function (e) {
  const clickedElement = e.target;
  const data = clickedElement.dataset;
  const dexId = data.pokdex;

  if (!dexId) return;

  if (party.length < 6 && !party.includes(dexId)) {
    party.push(dexId);
  } else if (party.includes(dexId)) {
    party.splice(party.indexOf(dexId), 1);
  } else {
    alert('Party full (6 Pokémon). Click one to remove.');
    return;
  }

  document
    .getElementById('clearParty')
    .classList.remove('hidden');

  updatePartyDisplay(currentGenerationData);

  calculateTeamWeaknesses(currentGenerationData);
});


/**
 * Removes a Pokémon from the party when clicked
 * inside the party display area.
 */
document
  .getElementById('partyDisplay')
  .addEventListener('click', function (e) {
    const target = e.target.closest('[data-dexid]');

    if (!target) return;

    const dexId = target.dataset.dexid;
    const index = party.indexOf(dexId);

    if (index !== -1) {
      party.splice(index, 1);

      updatePartyDisplay(currentGenerationData);

      calculateTeamWeaknesses(currentGenerationData);
    }
  });


/**
 * Initial page setup.
 */
loadGenerations();