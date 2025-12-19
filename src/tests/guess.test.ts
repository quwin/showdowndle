import { comparePokemon } from "../guess"
import { scrapeBaseStats, scrapeLatestData } from "../dataScraper";
import { getPokemonGuessData, getUsageStats } from "../dataCollector";
import { Correctness, FullTierData } from '../dataStore';
const TIMEOUT_MS = 60 * 1000;

const data: FullTierData = await scrapeLatestData(9, 'ou');
const target1 = await getPokemonGuessData(data, 'Great Tusk');

test('Returns correct object', async () => {
  const guess = await getPokemonGuessData(data, 'dunsparce');
  expect(comparePokemon(target1, guess)).toStrictEqual({
    name: expect.any(Boolean),
    usage: expect.any(Number),
    type1: expect.any(Number),
    type2: expect.any(Number),
    bst: expect.any(Number),
    highestStat: expect.any(Boolean)
  });

  expect([Correctness.FALSE, Correctness.PARTIAL, Correctness.TRUE]).toContain(
    comparePokemon(target1, guess).type1
  );
  expect([Correctness.FALSE, Correctness.PARTIAL, Correctness.TRUE]).toContain(
    comparePokemon(target1, guess).type1
  );
}, TIMEOUT_MS);

describe('Returns correct name comparison data for two pokemon', () => {
  test('Same name', async () => {
    const guess = await getPokemonGuessData(data, 'great tusk');
    expect(comparePokemon(target1, guess).name).toStrictEqual(true);
  }, TIMEOUT_MS);

  test('Different names', async () => {
    const guess = await getPokemonGuessData(data, 'kingambit');
    expect(comparePokemon(target1, guess).name).toStrictEqual(false);
  }, TIMEOUT_MS);
});

test('Returns correct usage comparison data for two pokemon', async () => {
  const guess = await getPokemonGuessData(data, 'kingambit');
  expect(comparePokemon(target1, guess).usage).toStrictEqual(
    getUsageStats(data, 'Kingambit') - getUsageStats(data, 'Great Tusk')
  );
}, TIMEOUT_MS);

describe('Returns correct type1 comparison data for two pokemon', () => {
  test('type1 is the same', async () => {
    const guess = await getPokemonGuessData(data, 'donphan');
    expect(comparePokemon(target1, guess).type1).toStrictEqual(
      Correctness.TRUE
    );
  }, TIMEOUT_MS);

  test('type1 is not the same but equal to type2', async () => {
    const guess = await getPokemonGuessData(data, 'mankey');
    expect(comparePokemon(target1, guess).type1).toStrictEqual(
      Correctness.PARTIAL
    );
  }, TIMEOUT_MS);

  test('type1 is not the same and does not equal type2', async () => {
    const guess = await getPokemonGuessData(data, 'latias');
    expect(comparePokemon(target1, guess).type1).toStrictEqual(
      Correctness.FALSE
    );
  }, TIMEOUT_MS);
});

describe('Returns correct type2 comparison data for two pokemon', () => {
  test('type2 is the same', async () => {
    const guess = await getPokemonGuessData(data, 'poliwrath');
    expect(comparePokemon(target1, guess).type2).toStrictEqual(
      Correctness.TRUE
    );
  }, TIMEOUT_MS);

  test('type2 is not the same but equal to type1', async () => {
    const guess = await getPokemonGuessData(data, 'quagsire');
    expect(comparePokemon(target1, guess).type2).toStrictEqual(
      Correctness.PARTIAL
    );
  }, TIMEOUT_MS);

  test('type2 is not the same and does not equal type1', async () => {
    const guess = await getPokemonGuessData(data, 'venusaur');
    expect(comparePokemon(target1, guess).type2).toStrictEqual(
      Correctness.FALSE
    );
  }, TIMEOUT_MS);
});

test('Returns correct bst comparison data for two pokemon', async () => {
  const guess = await getPokemonGuessData(data, 'kingambit');
  const guessBst = (await scrapeBaseStats('kingambit')).reduce(
    (sum, stat) => sum + stat, 0
  );
  const targetBst = (await scrapeBaseStats('great-tusk')).reduce(
    (sum, stat) => sum + stat, 0
  );
  expect(comparePokemon(target1, guess).bst).toStrictEqual(
    guessBst - targetBst
  );
}, TIMEOUT_MS);

describe('Returns correct highestStat comparison data for two pokemon', () => {
  test('Same highest stat', async () => {
    const guess = await getPokemonGuessData(data, 'trapinch');
    expect(comparePokemon(target1, guess).highestStat).toStrictEqual(true);
  }, TIMEOUT_MS);

  test('Different highest stat', async () => {
    const guess = await getPokemonGuessData(data, 'primarina');
    expect(comparePokemon(target1, guess).highestStat).toStrictEqual(false);
  }, TIMEOUT_MS);
});
