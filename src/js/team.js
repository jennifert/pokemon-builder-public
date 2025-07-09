/**
 * @file team.js
 * @description Analyzes the type distribution of the current Pokémon party.
 * - Counts type occurrences
 * - Passes data to display for rendering the Team Weakness Table
 */
import { fetchDexEntries } from './fetch.js';
import { party } from './party.js';
import { displayTeamWeaknessTable } from './display.js';

/**
 * Calculates how many party Pokémon have each type (e.g., water, fire).
 * Sends the results to `displayTeamWeaknessTable` for rendering.
 * 
 * @returns {void}
 */
export function calculateTeamWeaknesses() {
  fetchDexEntries().then(dexResults => {
    const pokemonList = dexResults['pokemon'];
    const typeCounts = {};

    for (let dexId of party) {
      const mon = pokemonList.find(p => p.dexId === dexId);
      if (!mon) continue;

      const types = mon.types.map(t => t.toLowerCase());

      for (let type of types) {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      }
    }

    displayTeamWeaknessTable(typeCounts);
  });
}
