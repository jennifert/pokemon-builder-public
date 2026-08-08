/**
 * @file type-utils.js
 * @description Analyzes a Pokémon's defensive type matchups using
 * effectiveness data stored in the generation JSON.
 */

/**
 * Categorizes a Pokémon's defensive type effectiveness.
 *
 * @param {Object} pokemonData - Pokémon object from the generation JSON
 * @returns {Object} Categorized defensive matchups
 */
export function getIndividualTypeAnalysis(pokemonData) {
  const weaknesses = [];
  const resistances = [];
  const immunities = [];
  const neutral = [];

  for (const [type, multiplier] of Object.entries(pokemonData.weaknesses)) {
    const matchup = {
      type,
      multiplier
    };

    if (multiplier === 0) {
      immunities.push(matchup);
    } else if (multiplier > 1) {
      weaknesses.push(matchup);
    } else if (multiplier < 1) {
      resistances.push(matchup);
    } else {
      neutral.push(matchup);
    }
  }

  return {
    weaknesses,
    resistances,
    immunities,
    neutral
  };
}