/**
 * @file type-utils.js
 * @description Analyzes a Pokémon's weaknesses, resistances, and immunities using
 * precomputed effectiveness data from its JSON entry.
 */

/**
 * Processes a Pokémon's effectiveness map (from JSON) into categorized matchups.
 *
 * @param {string[]} types - Array of Pokémon types (e.g., ['fire', 'flying'])
 * @param {Object} pokemonData - Full Pokémon object from the JSON data
 * @param {Object.<string, number>} pokemonData.weaknesses - Type effectiveness multipliers
 * @returns {Object} Breakdown of type matchups:
 *   - weaknesses: string[]
 *   - resistances: string[]
 *   - neutral: string[]
 *   - strongAgainst: string[]
 *   - noEffect: string[]
 */
export function getIndividualTypeAnalysis(types, pokemonData) {
  const weaknesses = [];
  const resistances = [];
  const neutral = [];
  const strongAgainst = [];
  const noEffect = [];

  // Iterate over all the weaknesses in the Pokémon data. Identify offensive advantages (overlap with weaknesses)
  for (const type of Object.keys(pokemonData.weaknesses)) {
    const effectiveness = pokemonData.weaknesses[type]; // This comes directly from the JSON

    if (effectiveness > 1) {
      weaknesses.push(type); // Weakness: effectiveness > 1 (super effective)
    } else if (effectiveness < 1 && effectiveness > 0) {
      resistances.push(type); // Resistance: effectiveness < 1 but > 0 (not very effective)
    } else if (effectiveness === 1) {
      neutral.push(type); // Neutral: effectiveness == 1 (normal effectiveness)
    } else if (effectiveness === 0) {
      noEffect.push(type); // No Effect: effectiveness == 0 (no effect)
    }
  }

  // Populate strongAgainst for types with effectiveness > 1
  for (const type of Object.keys(pokemonData.weaknesses)) {
    const effectiveness = pokemonData.weaknesses[type];
    if (effectiveness > 1) {
      strongAgainst.push(type); // Strong Against: effectiveness > 1
    }
  }

  return {
    weaknesses,
    resistances,
    neutral,
    strongAgainst,
    noEffect
  };
}
