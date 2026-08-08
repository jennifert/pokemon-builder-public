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
  const container = document.getElementById('teamWeaknessTable');

  if (Object.keys(typeAnalysis).length === 0) {
    container.innerHTML = '<em>No Pokémon in party.</em>';
    return;
  }

  let html = `
    <h3>Team Defensive Matchups</h3>

    <table class="pokemon-type-breakdown">
      <thead>
        <tr>
          <th>Type</th>
          <th>Weak</th>
          <th>Resist</th>
          <th>Immune</th>
          <th>Neutral</th>
        </tr>
      </thead>

      <tbody>
  `;

  const sortedTypes = Object.entries(typeAnalysis).sort(
    (a, b) => {
      return b[1].weak - a[1].weak;
    }
  );

  for (const [type, analysis] of sortedTypes) {
    html += `
      <tr>
        <td>${type}</td>
        <td>${analysis.weak}</td>
        <td>${analysis.resistant}</td>
        <td>${analysis.immune}</td>
        <td>${analysis.neutral}</td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}