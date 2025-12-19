import { getUsageStats, getMostCommonNature, getPokemonGuessData } from "../dataCollector";
import { scrapeLatestData } from "../dataScraper";
import { FullTierData, Nature, Natures, PokemonGuessData } from '../dataStore';
const TIMEOUT_MS = 60 * 1000;

const data: FullTierData = await scrapeLatestData(9, 'ou');

function createGuessData(
  name: string, usage: number, types: string[], bst: number, stat: string
): PokemonGuessData {
  return {
    name: name,
    usage: usage,
    types: types,
    bst: bst,
    highestStat: stat
  };
}

describe('getUsageStats Tests', () => {
  test('Returns a number for valid pokemon', () => {
    expect(getUsageStats(data, 'Great Tusk')).toBeLessThanOrEqual(1);
    expect(getUsageStats(data, 'Great Tusk')).toBeGreaterThanOrEqual(0);
  });

  test('Returns 0 for invalid but existing Pokemon', () => {
    expect(getUsageStats(data, 'Zacian')).toStrictEqual(0);
  });
});

describe('getMostCommonNature Tests', () => {
  test('Returns correct values for natures', () => {
    const natures: string[] = [
      'Adamant', 'Bashful', 'Bold', 'Brave', 'Calm', 'Careful', 'Docile', 'Gentle',
      'Hardy', 'Hasty', 'Impish', 'Jolly', 'Lax', 'Lonely', 'Mild', 'Modest', 'Naive',
      'Naughty', 'Quiet', 'Quirky', 'Rash', 'Relaxed', 'Sassy', 'Serious', 'Timid'
    ]

    const natureData: Nature = getMostCommonNature(data, 'Great Tusk') as Nature;
    const natureIndex: number = natures.indexOf(natureData.nature)
    expect(natureIndex).not.toEqual(-1);
    expect(natureData.statChanges).toStrictEqual(Object.values(Natures)[natureIndex]);
  });

  test('Returns null for Pokemon not in the tier or non-existing Pokemon', () => {
    expect(getMostCommonNature(data, 'Zacian')).toBeNull();
    expect(getMostCommonNature(data, 'Alright Tusk')).toBeNull();
  });
});

describe('getPokemonGuessData Tests', () => {
  test('Returns correct data for Pokemon in tier', async () => {
    await expect(getPokemonGuessData(data, 'great tusk')).resolves.toStrictEqual(
      createGuessData(
        'Great Tusk', getUsageStats(data, 'Great Tusk'), ['ground', 'fighting'], 570, 'Attack'
      )
    )

    await expect(getPokemonGuessData(data, 'ogerpon wellspring')).resolves.toStrictEqual(
      createGuessData(
        'Ogerpon-Wellspring', getUsageStats(data, 'Ogerpon-Wellspring'), ['grass', 'water'], 550, 'Attack'
      )
    )

    await expect(getPokemonGuessData(data, 'ogerpon wellspring mask')).resolves.toStrictEqual(
      createGuessData(
        'Ogerpon-Wellspring', getUsageStats(data, 'Ogerpon-Wellspring'), ['grass', 'water'], 550, 'Attack'
      )
    )
  }, TIMEOUT_MS);

  test('Returns correct data for existing Pokemon in higher tier', async () => {
    await expect(getPokemonGuessData(data, 'eternatus')).resolves.toStrictEqual(
      createGuessData(
        'Eternatus', 0, ['poison', 'dragon'], 690, 'Special-Attack'
      )
    )
  }, TIMEOUT_MS);

  test('Throws error for non-existing Pokemon', async () => {
    await expect(getPokemonGuessData(data, 'iron beds')).rejects.toThrow();
  }, TIMEOUT_MS);
});