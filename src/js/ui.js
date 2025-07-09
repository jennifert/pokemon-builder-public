/**
 * @file ui.js
 * @description Handles all DOM interactions for the Pokémon Team Builder:
 * - Loads results from selected filters
 * - Adds/removes Pokémon to/from party on click
 * - Updates party display and weakness analysis
 */
import { fetchDexEntries, ViewPokemon } from './fetch.js';
import { party, updatePartyDisplay, clearParty } from './party.js';
import { calculateTeamWeaknesses } from './team.js';
import { results } from './state.js';

/**
 * Clears the current party when the Clear Party button is clicked.
 * Hides the button and refreshes team analysis.
 */
document.getElementById('clearParty').addEventListener('click', () => {
  clearParty();
  calculateTeamWeaknesses();
});

/**
 * Loads available Pokémon when the Team Form is submitted.
 * Prevents page reload and shows filtered Pokémon based on selected options.
 */
document.getElementById('TeamForm').addEventListener('submit', async function (evt) {
  evt.preventDefault();
  results.innerHTML = '';
  const dexResults = await fetchDexEntries();
  ViewPokemon(dexResults);
});

/**
 * Adds or removes a Pokémon from the party when its sprite is clicked in the results list.
 * Enforces a max of 6 Pokémon.
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

  document.getElementById('clearParty').classList.remove('hidden');
  updatePartyDisplay();
  calculateTeamWeaknesses();
});

/**
 * Removes a Pokémon from the party when clicked inside the party display area.
 */
document.getElementById('partyDisplay').addEventListener('click', function (e) {
  const target = e.target.closest('[data-dexid]');
  if (!target) return;

  const dexId = target.dataset.dexid;
  const index = party.indexOf(dexId);

  if (index !== -1) {
    party.splice(index, 1);
    updatePartyDisplay();
    calculateTeamWeaknesses();
  }
});