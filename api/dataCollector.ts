import { titleCase } from "title-case";
import { scrapeBaseStats, scrapeTypes } from "./dataScraper";
import { FullTierData, Nature, Natures, Stats, PokemonGuessData, StatisticsBlock } from "./dataStore";
import { convertToSmogonAndPokeApiName } from "./nameConverters";

/**
 * Given a pokemon, checks the tier data for the Pokemon.
 * If the Pokemon is found in the tier, returns its usage stats.
 * Otherwise, returns 0 for the usage.
 * 
 * @param {FullTierData} data 
 * @param {string} pokemon 
 * @returns {number}
 */
export function getUsageStats(data: FullTierData, pokemon: string): number {
  if (data[pokemon]) {
    return data[pokemon].usage;
  } else {
    return 0;
  }
}

/**
 * Given a Pokemon, finds its most common nature from that Pokemon evSpreads data.
 * If the Pokemon is not in the data, returns null.
 * Otherwise, returns a Nature object containing its nature and the stats the nature
 * affects.
 * In the rare case that there is a tie between multiple natures,
 * returns only the first nature in alphabetical order.
 * 
 * @param {FullTierData} data 
 * @param {string} pokemon 
 * @returns {Nature | null}
 */
export function getMostCommonNature(data: FullTierData, pokemon: string): Nature | null {
  if (!data[pokemon]) {
    return null;
  }

  const natures: string[] = [
    'Adamant', 'Bashful', 'Bold', 'Brave', 'Calm', 'Careful', 'Docile', 'Gentle',
    'Hardy', 'Hasty', 'Impish', 'Jolly', 'Lax', 'Lonely', 'Mild', 'Modest', 'Naive',
    'Naughty', 'Quiet', 'Quirky', 'Rash', 'Relaxed', 'Sassy', 'Serious', 'Timid'
  ]
  const natureCount: number[] = Array(25).fill(0);
  const evSpreads: StatisticsBlock = data[pokemon].Spreads;

  for (const key in evSpreads) {
    for (let i = 0; i < natures.length; i++) {
      if (key.indexOf(natures[i]) != -1) {
        natureCount[i]++;
        break;
      }
    }
  }

  const maxIndex: number = natureCount.indexOf(Math.max(...natureCount));
  return {nature: natures[maxIndex], statChanges: Object.values(Natures)[maxIndex]};
}

/**
 * Given a Pokemon name and data, converts it to the Smogon and PokeApi name format
 * and gets the Pokemon guess data for that Pokemon.
 * Note: if two stats are tied for the highest, returns the first one in order of,
 * [hp, atk, def, spa, spd, spe].
 * 
 * @param data 
 * @param pokemon 
 * @returns {PokemonGuessData}
 * @throws {Error} if scrapeTypes or scrapeBaseStatTotal throw an error
 */
export async function getPokemonGuessData(
  data: FullTierData, pokemon: string
): Promise<PokemonGuessData> {
  const names = convertToSmogonAndPokeApiName(pokemon)
  const smogonName = titleCase(names.smogonName);
  const pokeApiName = names.pokeApiName.replaceAll(' ', '-');
  const stats: number[] = await scrapeBaseStats(pokeApiName);

  return {
    name: smogonName,
    usage: getUsageStats(data, smogonName),
    types: await scrapeTypes(pokeApiName),
    bst: stats.reduce((sum, stat) => sum + stat, 0),
    highestStat: Object.values(Stats)[stats.indexOf(Math.max(...stats))],
  };
}
