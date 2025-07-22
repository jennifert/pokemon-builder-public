/**
 * @file loading-messages.js
 * @description A list of funny, Pokémon-themed loading messages and a utility function to fetch one at random.
 */

/**
 * Pokémon-themed loading messages for fun status displays.
 *
 * @type {string[]}
 */
export const loadingMessages = [
  // Trainer & Pokédex themed
  'Calling Professor Oak… again.',
  'Gary has already picked his team. Ugh.',
  'Reading your Pokédex. Pretending you caught them all.',
  'Your rival is watching. No pressure.',
  'Checking your Poké Balls for unauthorized Magikarps.',
  'Nurse Joy is inspecting your party. Please wait.',

  // Strategy & Type logic
  'Calculating STAB... then recalculating it for fun.',
  'Rechecking resistances. Hope you\'re not weak to Rock.',
  'Trying to remember why Ice beats Grass but not Water...',
  'Assigning nicknames like "DeathBeak" and "Jeff".',
  'Balancing your team... poorly, but enthusiastically.',
  'Team synergy is... questionable. Reviewing anyway.',

  // Charting & Type system
  'Consulting the Type Chart. It\'s cranky today.',
  'Looking up why Dragon fears Fairy. Still confused.',
  'Applying Gen 1 logic... Ghost vs. Psychic? Sure.',
  'Normal is weak to... wait, nothing? Okay then.',
  'Searching for a reason to use Bug types. Found one!',

  // Legendary or Mythic flavor
  'Summoning Rayquaza. Delays expected.',
  'Mewtwo is ignoring your request. Again.',
  'Communing with Arceus... Just kidding, it\'s busy.',
  'Loading power levels... OVER 9000! Wrong franchise.',
  'Calling in backup from the Elite Four.',

  // Data and sprite jokes
  'Caching sprites from Kanto. Expect lag.',
  'Compressing team data into Poké Balls.',
  'Sending your strategy to Bill’s PC.',
  'Auto-equipping Leftovers. You’re welcome.',
  'Sorting EVs, IVs, and existential dread...',

  // Misc silly
  'Who needs balance? Mono-Fighting FTW!',
  'Letting RNG pick your sixth slot...',
  'Loading faster than a Quick Attack. Hopefully.',
  'Checking for illegal movesets. Shame on you.',
  'Waiting for your Wi-Fi to stop fainting.'
];

/**
 * Picks a random loading message from the predefined list.
 *
 * @returns {string} A randomly selected Pokémon-themed loading message.
 */
export function getRandomLoadingMessage() {
  const index = Math.floor(Math.random() * loadingMessages.length);
  return loadingMessages[index];
}

// Example usage
// import { getRandomLoadingMessage } from './loading-messages.js';
// console.log(getRandomLoadingMessage());