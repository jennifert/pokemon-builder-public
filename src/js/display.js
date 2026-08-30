/**
 * @file display.js
 * @description Displays the team's defensive type analysis.
 */

/**
 * Displays a table summarizing the team's defensive matchups.
 *
 * @param {Object} typeAnalysis
 * @returns {void}
 */
export function displayTeamWeaknessTable(typeAnalysis) {
  const tableBody = document.getElementById('teamWeaknessBody');

  if (Object.keys(typeAnalysis).length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5">
          <em>No Pokémon in party.</em>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = '';

  const sortedTypes = Object.entries(typeAnalysis).sort(
    (a, b) => b[1].weak - a[1].weak
  );

  for (const [type, analysis] of sortedTypes) {
    tableBody.insertAdjacentHTML(
      'beforeend',
      `
        <tr>
          <th scope="row">${type}</th>
          <td>${analysis.weak}</td>
          <td>${analysis.resistant}</td>
          <td>${analysis.immune}</td>
          <td>${analysis.neutral}</td>
        </tr>
      `
    );
  }
}