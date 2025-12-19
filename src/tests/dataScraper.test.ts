import { scrapeBaseStats, scrapeLatestData, scrapePokemonInTier, scrapeSprite, scrapeTypes } from "../dataScraper";
import { SpriteType } from "../dataStore";
const TIMEOUT_MS = 60 * 1000;

function generateStatResponse(
  hp: number, atk: number, def: number, spa: number, spd: number, spe: number
): number[] {
  return [hp, atk, def, spa, spd, spe];
}

describe('scrapeLatestData Tests', () => {
  test('Returns data for generations 1-9 OU', async () => {
    for (let i = 1; i <= 9; i++) {
      await expect(scrapeLatestData(i, 'ou')).resolves.toBeDefined();
    }
  }, TIMEOUT_MS);

  test('Throws error for invalid generation or tier', async () => {
    await expect(scrapeLatestData(10, 'ou')).rejects.toThrow();
    await expect(scrapeLatestData(9, 'au')).rejects.toThrow();
  }, TIMEOUT_MS);
});

describe('scrapePokemon in Tier Tests', () => {
  test('Returns data in correct format for generations 1-9 OU', async () => {
    for (let i = 1; i <= 9; i++) {
      await expect(scrapePokemonInTier
        (await scrapeLatestData(i, 'ou'), i, 'ou')
      ).resolves.toStrictEqual(expect.any(Array<String>));
    }
  }, TIMEOUT_MS);

  test('Throws error for invalid generation or tier', async () => {
    await expect(scrapePokemonInTier(
      await scrapeLatestData(9, 'ou'), 10, 'ou')
    ).rejects.toThrow();
    await expect(scrapePokemonInTier(
      await scrapeLatestData(9, 'ou'), 9, 'au')
    ).rejects.toThrow();
  }, TIMEOUT_MS);
});

describe('scrapeBaseStats Tests', () => {
  test('Correctly returns BST', async () => {
    await expect(scrapeBaseStats('dunsparce')).resolves.toStrictEqual(
      generateStatResponse(100, 70, 70, 65, 65, 45)
    );
  }, TIMEOUT_MS);

  test('Throws error for non-existent pokemon', async () => {
    await expect(scrapeBaseStats('funsparce')).rejects.toThrow();
  }, TIMEOUT_MS);

  test('Correctly returns BST for different forms', async () => {
    await expect(scrapeBaseStats('arceus-bug')).resolves.toStrictEqual(
      generateStatResponse(120, 120, 120, 120, 120, 120)
    );
    await expect(scrapeBaseStats('silvally-fairy')).resolves.toStrictEqual(
      generateStatResponse(95, 95, 95, 95, 95, 95)
    );
  }, TIMEOUT_MS);
});

describe('scrapeTypes Tests', () => {
  test('Correctly returns single type', async () => {
    await expect(scrapeTypes('dunsparce')).resolves.toStrictEqual(['normal', 'none']);
  }, TIMEOUT_MS);

  test('Correctly returns dual types', async () => {
    await expect(scrapeTypes('gyarados')).resolves.toStrictEqual(['water', 'flying']);
  }, TIMEOUT_MS);

  test('Throws error for non-existent pokemon', async () => {
    await expect(scrapeTypes('funsparce')).rejects.toThrow();
  }, TIMEOUT_MS);

  test('Correctly returns types for different forms', async () => {
    await expect(scrapeTypes('arceus-flying')).resolves.toStrictEqual(['flying', 'none']);
    await expect(scrapeTypes('silvally-ice')).resolves.toStrictEqual(['ice', 'none']);
    await expect(scrapeTypes('oricorio-pom-pom')).resolves.toStrictEqual(['electric', 'flying']);
  }, TIMEOUT_MS);

  test('Correctly returns types for different regional variants', async () => {
    await expect(scrapeTypes('exeggutor')).resolves.toStrictEqual(['grass', 'psychic']);
    await expect(scrapeTypes('exeggutor-alola')).resolves.toStrictEqual(['grass', 'dragon']);

    await expect(scrapeTypes('weezing')).resolves.toStrictEqual(['poison', 'none']);
    await expect(scrapeTypes('weezing-galar')).resolves.toStrictEqual(['poison', 'fairy']);

    await expect(scrapeTypes('wooper')).resolves.toStrictEqual(['water', 'ground']);
    await expect(scrapeTypes('wooper-paldea')).resolves.toStrictEqual(['poison', 'ground']);

    await expect(scrapeTypes('samurott')).resolves.toStrictEqual(['water', 'none']);
    await expect(scrapeTypes('samurott-hisui')).resolves.toStrictEqual(['water', 'dark']);
  }, TIMEOUT_MS);

  test('Correctly returns types for mega evolutions', async () => {
    await expect(scrapeTypes('ampharos')).resolves.toStrictEqual(['electric', 'none']);
    await expect(scrapeTypes('ampharos-mega')).resolves.toStrictEqual(['electric', 'dragon']);
  }, TIMEOUT_MS);
});

describe('scrapeSprite Tests', () => {
  test('Works for existing pokemon', async () => {
    await expect(scrapeSprite(
      'dunsparce'
    )).resolves.toStrictEqual({
      blob: expect.any(Blob), type: expect.any(SpriteType)
    });
  }, TIMEOUT_MS);

  test('Throws error for invalid sprite name', async () => {
    await expect(scrapeSprite('funsparce')).rejects.toThrow();
    await expect(scrapeSprite('ho-oh')).rejects.toThrow();
  }, TIMEOUT_MS);
});
