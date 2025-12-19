import { Correctness, GuessResult, PokemonGuessData } from "./dataStore.js";

/**
 * Given two PokemonGuessData, returns the GuessResult.
 * - "name" is true if Pokemon have the same name, and false otherwise
 * - "usage" is the guess's usage minus the target's usage
 * - "type1" is Correctness.TRUE if the guess's type1 matches the
 *           target's type1, Correctness.Partial if it matches target's
 *           type2, and Correctness.False if it matches neither
 * - "type2" is Correctness.TRUE if the guess's type2 matches the
 *           target's type2, Correctness.Partial if it matches target's
 *           type1, and Correctness.False if it matches neither
 * - "bst" is the guess's bst minus the target's bst
 * - "nature" is true if Pokemon have the same nature, and false otherwise
 * 
 * @param {PokemonGuessData} target 
 * @param {PokemonGuessData} guess 
 * @returns {GuessResult}
 */
export function comparePokemon(
  target: PokemonGuessData, guess: PokemonGuessData
): GuessResult {
  let type1Correctness: Correctness;
  if (guess.types[0] === target.types[0]) {
    type1Correctness = Correctness.TRUE
  } else if (guess.types[0] === target.types[1]) {
    type1Correctness = Correctness.PARTIAL
  } else {
    type1Correctness = Correctness.FALSE;
  }

  let type2Correctness: Correctness;
  if (guess.types[1] === target.types[1]) {
    type2Correctness = Correctness.TRUE
  } else if (guess.types[1] === target.types[0]) {
    type2Correctness = Correctness.PARTIAL
  } else {
    type2Correctness = Correctness.FALSE;
  }

  return {
    name: guess.name === target.name,
    usage: guess.usage - target.usage,
    type1: type1Correctness,
    type2: type2Correctness,
    bst: guess.bst - target.bst,
    highestStat: guess.highestStat === target.highestStat
  }
}
