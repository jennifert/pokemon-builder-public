/**
 * @file team.js
 * @description Analyzes defensive type matchups for the current Pokémon party.
 * - Reads weakness data from the selected generation JSON
 * - Counts how many party members are weak, resistant, immune, or neutral to each type
 * - Passes the results to the display layer
 */

import { party } from './party.js';
import { displayTeamWeaknessTable } from './display.js';

/**
 * Calculates the team's defensive matchups using the currently
 * selected generation data.
 *
 * @param {Object|null} generationData
 * @returns {void}
 */
export function calculateTeamWeaknesses(generationData) {
  if (!generationData) {
    displayTeamWeaknessTable({});
    return;
  }

  const pokemonList = generationData.pokemon;

  const typeAnalysis = {};

  for (const dexId of party) {
    const mon = pokemonList.find(pokemon => pokemon.dexId === dexId);

    if (!mon) continue;

    for (const [type, multiplier] of Object.entries(mon.weaknesses)) {
      if (!typeAnalysis[type]) {
        typeAnalysis[type] = {
          weak: 0,
          resistant: 0,
          immune: 0,
          neutral: 0
        };
      }

      if (multiplier === 0) {
        typeAnalysis[type].immune += 1;
      } else if (multiplier > 1) {
        typeAnalysis[type].weak += 1;
      } else if (multiplier < 1) {
        typeAnalysis[type].resistant += 1;
      } else {
        typeAnalysis[type].neutral += 1;
      }
    }
  }

  displayTeamWeaknessTable(typeAnalysis);
}