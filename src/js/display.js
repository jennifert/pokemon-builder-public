/**
 * @file display.js
 * @description Handles rendering of the Team Weakness Table.
 * Displays how many Pokémon in the user's party belong to each type.
 */

/**
 * Displays a table summarizing the number of Pokémon per type in the current team.
 *
 * @param {Object.<string, number>} typeCounts - An object mapping each type (e.g., 'fire') to its count
 * @returns {void}
 */
export function displayTeamWeaknessTable(typeCounts) {
  const container = document.getElementById('teamWeaknessTable');

  if (Object.keys(typeCounts).length === 0) {
    container.innerHTML = '<em>No Pokémon in party.</em>';
    return;
  }

  let html = '<h3>Team Type Breakdown</h3>';
  html += '<table class="pokemon-type-breakdown"><thead><tr><th>Type</th><th>Count</th></tr></thead><tbody>';

  for (let [type, count] of Object.entries(typeCounts)) {
    html += `<tr><td>${type}</td><td>${count}</td></tr>`;
  }

  html += '</tbody></table>';
  container.innerHTML = html;
}
