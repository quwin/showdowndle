import { getUsageStats, getMostCommonNature, getPokemonGuessData, extractUsage, extractNames, getTextBoxSuggestions } from "../dataCollector";
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

describe('extractUsage Test', () => {
  test('Creates a record with the correct values', () => {
    const usageData: Record<string, number> = extractUsage(data);
    for (const key in data) {
      expect(usageData[key]).toStrictEqual(data[key].usage);
    }
  });
});

describe('extractNames Test', () => {
  test('Creates a record with the correct values', () => {
    const nameData: string[] = extractNames(data);
    for (const key in data) {
      expect(nameData).toContain(key);
    }
  });
});

describe('getTextBoxSuggestions Test', () => {
  const names: string[] = [
    'Great Tusk', 'Gholdengo', 'Kingambit', 'Iron Valiant', 'Iron Hands', 'Iron Moth',
    'Ogerpon-Wellspring', 'Ting-Lu', 'Chi-Yu', 'Roaring Moon', 'Walking Wake',
    'Iron Bundle', 'Iron Jugulis', 'Iron Thorns', 'Iron Leaves', 'Iron Treads', 'Iron Crown'
  ]

  test('Simple returns correct suggestions', () => {
    expect(getTextBoxSuggestions('G', names)).toStrictEqual(['Great Tusk', 'Gholdengo']);
    expect(getTextBoxSuggestions('Gr', names)).toStrictEqual(['Great Tusk']);
    expect(getTextBoxSuggestions('Oger', names)).toStrictEqual(['Ogerpon-Wellspring']);
    expect(getTextBoxSuggestions('Ogerpon', names)).toStrictEqual(['Ogerpon-Wellspring']);
  });

  test('Case insensitive returns correct suggestions', () => {
    expect(getTextBoxSuggestions('g', names)).toStrictEqual(['Great Tusk', 'Gholdengo']);
    expect(getTextBoxSuggestions('gr', names)).toStrictEqual(['Great Tusk']);
    expect(getTextBoxSuggestions('oger', names)).toStrictEqual(['Ogerpon-Wellspring']);
    expect(getTextBoxSuggestions('ogerpon', names)).toStrictEqual(['Ogerpon-Wellspring']);
  });

  test('Returns at most 8 suggestions', () => {
    expect(getTextBoxSuggestions('I', names)).toStrictEqual([
      'Iron Valiant', 'Iron Hands', 'Iron Moth', 'Iron Bundle',
      'Iron Jugulis', 'Iron Thorns', 'Iron Leaves', 'Iron Treads'
    ]);
    expect(getTextBoxSuggestions('Iron ', names)).toStrictEqual([
      'Iron Valiant', 'Iron Hands', 'Iron Moth', 'Iron Bundle',
      'Iron Jugulis', 'Iron Thorns', 'Iron Leaves', 'Iron Treads'
    ]);
  });

  test('Returns empty array for no matches', () => {
    expect(getTextBoxSuggestions('Z', names)).toStrictEqual([]);
    expect(getTextBoxSuggestions('XYZ', names)).toStrictEqual([]);
  });
});
