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
import {
  results,
  selectedGeneration,
  selectedSprites,
  selectedVersion,
  generationOptions,
  generationTitle,
  generationDescription,
  generationInfo,
  loadingStatus,
  interactionStatus
} from './state.js';
import { party, updatePartyDisplay, clearParty } from './party.js';
import { calculateTeamWeaknesses } from './team.js';

let currentGenerationData = null;

/**
 * Loads supported Pokémon generations and adds them
 * to the generation dropdown.
 */
async function loadGenerations() {
  try {
    const generationData = await fetchGenerations();

    for (const generation of generationData.generations) {
      const option = document.createElement('option');

      option.value = generation.file;
      option.textContent = generation.name;

      selectedGeneration.appendChild(option);
    }
  } catch (error) {
    loadingStatus.textContent =
      `Unable to load available generations. ${error.message}`;

    loadingStatus.hidden = false;
    selectedGeneration.disabled = true;
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
  loadingStatus.textContent = 'Loading generation data...';
  loadingStatus.hidden = false;

  generationOptions.disabled = true;

  try {
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

    document
      .getElementById('generationOptionsHelp')
      .hidden = true;

    results.innerHTML = '';
    clearParty(currentGenerationData);
  } catch (error) {
    currentGenerationData = null;

    generationInfo.hidden = true;
    results.innerHTML = '';

    document
      .getElementById('generationOptionsHelp')
      .hidden = false;

    loadingStatus.textContent =
      `Unable to load generation data. ${error.message}`;

    return;
  }

  loadingStatus.hidden = true;
});


/**
 * Clears the current party when the Clear Party button is activated.
 * Refreshes the party display and team analysis.
 */
document
  .getElementById('clearParty')
  .addEventListener('click', () => {
    clearParty(currentGenerationData);
    interactionStatus.textContent = 'Party cleared.';
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
    interactionStatus.textContent = '';

    ViewPokemon(currentGenerationData);

    requestAnimationFrame(() => {
      interactionStatus.textContent = 'Available Pokémon loaded.';
    });
  });


/**
 * Adds or removes a Pokémon from the party when its result button
 * is activated.
 * Enforces a maximum party size of 6 Pokémon.
 */
results.addEventListener('click', function (e) {
  const button = e.target.closest('[data-pokdex]');

  if (!button) return;

  const dexId = button.dataset.pokdex;
  const name = button.dataset.name;

  if (party.length < 6 && !party.includes(dexId)) {
    party.push(dexId);

    button.setAttribute('aria-pressed', 'true');
    button.setAttribute('aria-label', `Remove ${name} from party`);
    button.title = `Remove ${name} from party`;

    interactionStatus.textContent =
      `${name} added to party. ${party.length} of 6 Pokémon selected.`;
  } else if (party.includes(dexId)) {
    party.splice(party.indexOf(dexId), 1);
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', `Add ${name} to party`);
    button.title = `Add ${name} to party`;
    interactionStatus.textContent =
      `${name} removed from party. ${party.length} of 6 Pokémon selected.`;
  } else {
    alert('Party full (6 Pokémon). Remove one before adding another.');
    interactionStatus.textContent = 'Party full. Remove a Pokémon before adding another.';
    return;
  }

  updatePartyDisplay(currentGenerationData);

  calculateTeamWeaknesses(currentGenerationData);
});


/**
 * Removes a Pokémon from the party when its party button
 * is activated.
 */
document
  .getElementById('partyDisplay')
  .addEventListener('click', function (e) {
    const target = e.target.closest('[data-dexid]');

    if (!target) return;

    const dexId = target.dataset.dexid;
    const index = party.indexOf(dexId);

    if (index !== -1) {
      const name =
        target.querySelector('.party-info-name')?.textContent.trim();
      party.splice(index, 1);
      interactionStatus.textContent =
        `${name} removed from party. ${party.length} of 6 Pokémon selected.`;

      updatePartyDisplay(currentGenerationData);
      calculateTeamWeaknesses(currentGenerationData);
    }
  });


/**
 * Initial page setup.
 */
loadGenerations();