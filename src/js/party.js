/**
 * @file party.js
 * @description Manages the user's party of up to 6 Pokémon.
 * - Handles display rendering for each Pokémon
 * - Provides logic for clearing the party
 * - Analyzes type effectiveness via utility modules
 */
import { fetchDexEntries } from './fetch.js';
import { selectedSprites } from './state.js';
import { getIndividualTypeAnalysis } from './type-utils.js';

/** @constant {number} maxPartySize - The maximum allowed number of Pokémon in a party */
export const maxPartySize = 6;

/** 
 * @type {string[]}
 * @description An array of Pokémon dex IDs currently in the party.
 */
export const party = [];

/**
 * Updates the party display area with current party Pokémon.
 * Loads sprites and shows a breakdown of type matchups.
 * @returns {void}
 */
export function updatePartyDisplay() {
    const container = document.getElementById('partyDisplay');
    container.innerHTML = '<strong class="block">Party:</strong> ';

    fetchDexEntries().then(dexResults => {
        const imageBase = dexResults['imageSrc'] + selectedSprites.value + '/transparent/';
        const pokemonList = dexResults['pokemon'];

        for (let dexId of party) {
            const mon = pokemonList.find(p => p.dexId === dexId);
            if (!mon) continue;

            const name = mon.name;
            const types = mon.types.map(t => t.toLowerCase());
            const analysis = getIndividualTypeAnalysis(types, mon);  // Uses JSON-based weakness info

            const parsedDexID = parseInt(dexId);
            const checkOne = dexId.substring(0, 1);
            const checkTwo = dexId.substring(0, 2);

            let imageName;
            if (parsedDexID < 100) {
                imageName = checkTwo === '00' ? dexId.slice(2)
                    : checkOne === '0' ? dexId.slice(1)
                        : dexId;
            } else {
                imageName = dexId;
            }

            const sprite = `${imageBase}${imageName}.png`;

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
                    <div class="party-info-name">${name}</div>
                    <div class="party-info-details">
                        🔥 <strong>Weak:</strong> ${analysis.weaknesses.join(', ') || 'None'}<br>
                        🛡 <strong>Resist:</strong> ${analysis.resistances.join(', ') || 'None'}<br>
                        ⚪ <strong>Neutral:</strong> ${analysis.neutral.join(', ') || 'None'}<br>
                        💥 <strong>Strong:</strong> ${analysis.strongAgainst.join(', ') || 'None'}<br>
                        ❌ <strong>No Effect:</strong> ${analysis.noEffect.join(', ') || 'None'}
                    </div>
                </div>
            `;

        }

        if (party.length === 0) {
            container.innerHTML += '<em> (empty)</em>';
        }
    });
}

/**
 * Clears all Pokémon from the party and hides the Clear Party button.
 * Also re-renders the (empty) party area.
 * @returns {void}
 */
export function clearParty() {
    party.length = 0;
    document.getElementById('clearParty').classList.add('hidden');
    updatePartyDisplay();
}
