/**
 * @file loading-messages.js
 * @description A list of funny, Pokémon-themed loading messages and a utility function to fetch one at random.
 */
/**
 * Pokémon-themed loading messages grouped by category.
 *
 * @typedef {Object} LoadingMessageGroups
 * @property {string[]} trainer
 * @property {string[]} strategy
 * @property {string[]} legendary
 * @property {string[]} sprites
 * @property {string[]} misc
 */

/**
 * @type {LoadingMessageGroups}
 */
export const loadingMessages = {
  trainer: [
    'Calling Professor Oak… again.',
    'Gary has already picked his team. Ugh.',
    'Reading your Pokédex. Pretending you caught them all.',
    'Your rival is watching. No pressure.',
    'Checking your Poké Balls for unauthorized Magikarps.',
    'Nurse Joy is inspecting your party. Please wait.',
  ],

  strategy: [
    'Calculating STAB... then recalculating it for fun.',
    'Rechecking resistances. Hope you\'re not weak to Rock.',
    'Trying to remember why Ice beats Grass but not Water...',
    'Assigning nicknames like "DeathBeak" and "Jeff".',
    'Balancing your team... poorly, but enthusiastically.',
    'Team synergy is... questionable. Reviewing anyway.',
  ],

  legendary: [
    'Summoning Rayquaza. Delays expected.',
    'Mewtwo is ignoring your request. Again.',
    'Communing with Arceus... Just kidding, it\'s busy.',
    'Loading power levels... OVER 9000! Wrong franchise.',
    'Calling in backup from the Elite Four.',
  ],

  sprites: [
    'Caching sprites from Kanto. Expect lag.',
    'Compressing team data into Poké Balls.',
    'Sending your strategy to Bill\'s PC.',
    'Auto-equipping Leftovers. You\'re welcome.',
    'Sorting EVs, IVs, and existential dread...',
  ],

  misc: [
    'Who needs balance? Mono-Fighting FTW!',
    'Letting RNG pick your sixth slot...',
    'Loading faster than a Quick Attack. Hopefully.',
    'Checking for illegal movesets. Shame on you.',
    'Waiting for your Wi-Fi to stop fainting.'
  ]
};

/**
 * Picks a random loading message from a random category.
 *
 * @returns {string} A randomly selected Pokémon-themed loading message.
 */
export function getRandomLoadingMessage() {
  const categories = Object.values(loadingMessages);
  const category = categories[Math.floor(Math.random() * categories.length)];
  return category[Math.floor(Math.random() * category.length)];
}

// Example usage
// import { getRandomLoadingMessage } from './loading-messages.js';
// console.log(getRandomLoadingMessage());