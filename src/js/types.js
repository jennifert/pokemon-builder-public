/**
 * @file types.js
 * @description Provides the Gen 1 type matchup chart and utility function
 * for analyzing a Pokémon’s type effectiveness against all types.
 */

/**
 * Gen 1 type matchup chart showing effectiveness multipliers.
 * @constant {Object<string, Object<string, number>>}
 */
export const typeChart = {
  normal:     { rock: 0.5, ghost: 0 },
  fire:       { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5 },
  water:      { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  electric:   { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
  grass:      { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5 },
  ice:        { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2 },
  fighting:   { normal: 2, ice: 2, rock: 2, ghost: 0, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5 },
  poison:     { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5 },
  ground:     { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2 },
  flying:     { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5 },
  psychic:    { fighting: 2, poison: 2, psychic: 0.5 },
  bug:        { fire: 0.5, grass: 2, fighting: 0.5, poison: 2, flying: 0.5, ghost: 0.5 },
  rock:       { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2 },
  ghost:      { normal: 0, psychic: 0, ghost: 2 },
  dragon:     { dragon: 2 }
};

/**
 * Analyzes how a given type or type combination fares against all other types.
 *
 * @param {string[]} types - Array of a Pokémon's types (e.g., ['water', 'ice'])
 * @returns {Object} Object with keys:
 *   - weaknesses: string[]
 *   - resistances: string[]
 *   - immunities: string[]
 *   - neutral: string[]
 *   - strongAgainst: string[]
 */
export function getIndividualTypeAnalysis(types) {
    const allTypes = Object.keys(typeChart);
    const weaknesses = [];
    const resistances = [];
    const immunities = [];
    const neutral = [];
    const strongAgainst = [];

    for (let atkType of allTypes) {
        let multiplier = 1;

        for (let defType of types) {
            const chart = typeChart[atkType];
            if (chart && chart[defType] !== undefined) {
                multiplier *= chart[defType];
            }
        }

        if (multiplier === 0) immunities.push(`${atkType} (0x)`);
        else if (multiplier > 1.5) weaknesses.push(`${atkType} (${multiplier}x)`);
        else if (multiplier < 1) resistances.push(`${atkType} (${multiplier}x)`);
        else if (multiplier === 1) neutral.push(`${atkType}`);

        const offensive = types.map(t => typeChart[t] || {});
        for (let def of offensive) {
            if (def[atkType] === 2) strongAgainst.push(atkType);
        }
    }

    return {
        weaknesses,
        resistances,
        immunities,
        neutral,
        strongAgainst: [...new Set(strongAgainst)]
    };
}
