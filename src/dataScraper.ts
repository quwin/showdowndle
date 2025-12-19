import { getYear, getMonth, subMonths, getDate } from 'date-fns';
import { FullTierData, PokemonStatResponse, PokemonTypeResponse, SpriteType } from './dataStore';

/**
 * Extracts usage data from FullTierData object.
 * 
 * @param {FullTierData} data 
 * @returns {Record<string, number>}
 */
function extractUsage(data: FullTierData): Record<string, number> {
  const result: Record<string, number> = {};
  for (const key in data) {
    result[key] = data[key].usage;
  }
  return result;
}

/**
 * Function that finds the URL for the Smogon data given year, month,
 * generation and tier and returns the chaos URL as a string.
 * The URL is always for the 1630+ elo data, unless it is for gen9ou
 * in which case it is for the 1695+ elo data. 
 * 
 * @param {number} year 
 * @param {number} month 
 * @param {number} gen 
 * @param {string} tier 
 * @returns {string}
 */
function generateSomogonUrl(
  year: number, month: number, gen: number, tier: string
): string {
  const stringMonth = (month + 1).toString().padStart(2, '0');
  tier = tier.toLowerCase();

  let elo: number = 1630;
  if (tier.toLowerCase() === 'ou' && gen === 9) {
    elo = 1695;
  }

  return `https://www.smogon.com/stats/${year}-${stringMonth}/chaos/gen${gen}${tier}-${elo}.json`;
}

/**
 * Checks the Smogon website for last month's data on the given generation and tier.
 * If it's less than 3 days into the month, will check 2 month's agos data
 * to account for the time it takes to upload the data.
 * Returns the data section of the chaos data as a FullTierData object.
 * 
 * @param {number} gen
 * @param {string} tier
 * @throws {Error} if the gen and meta cannot be found
 * @returns {Promise<FullTierData>} if the gen and meta is found
 */
export async function scrapeLatestData(
  gen: number, tier: string
) : Promise<FullTierData> {
  let date = new Date();
  if (getDate(date) < 3) {
    date = subMonths(date, 2);
  } else {
    date = subMonths(date, 1);
  }
  
  const urlCurr = generateSomogonUrl(
    getYear(date), getMonth(date), gen, tier
  );
  let responseCurr = await fetch(urlCurr);

  if (!responseCurr.ok) {
    throw new Error(`Failed to find data for gen${gen}${tier}`);
  }

  return (await responseCurr.json()).data;
}

/**
 * Checks the last period for the usage data to find the
 * Pokemon in the given tier (>4.52% usage).
 * Periods are
 * - Jan-Mar
 * - Apr-Jun
 * - Jul-Sep
 * - Oct-Dec
 * If the current month is the last month of the period, checks
 * the previous period as current months data wouldn't be updated
 * If the current month is the first month of the period, checks
 * the previous period if it is less than 3 days to account for
 * the time it takes to upload stats.
 * 
 * Note: Currently does not work for Ubers tiers since those tiers
 *       do not have usage based cut-offs.
 *       Also, if a Pokemon fell to a different tier at the end of
 *       the period, they won't be included in the return.
 *       Additionally, if a Pokemon is banned, takes up to a month to
 *       update.
 * 
 * @param {number} gen 
 * @param {string} tier 
 * @returns {Promise<string[]>}
 * @throws {Error}
 */
export async function scrapePokemonInTier(
  currData: FullTierData, gen: number, tier: string
): Promise<string[]> {
  let currDate = new Date();
  let monthOffset = (getMonth(currDate) + 1) % 3;

  if (monthOffset === 0) {
    monthOffset = 3;
  } else if (monthOffset === 1 && getDate(currDate) < 3) {
    monthOffset = 4;
  }

  const prevDate1 = subMonths(currDate, monthOffset);
  const prevDate2 = subMonths(currDate, monthOffset + 1);
  const prevDate3 = subMonths(currDate, monthOffset + 2);

  const url1 = generateSomogonUrl(
    getYear(prevDate1), getMonth(prevDate1), gen, tier
  );
  const url2 = generateSomogonUrl(
    getYear(prevDate2), getMonth(prevDate2), gen, tier
  );
  const url3 = generateSomogonUrl(
    getYear(prevDate3), getMonth(prevDate3), gen, tier
  );

  const [res1, res2, res3] = await Promise.all([
    fetch(url1), fetch(url2), fetch(url3),
  ]);
  if (!res1.ok || !res2.ok || !res3.ok) {
    throw new Error(`Failed to find Pokemon in gen${gen}${tier}`);
  }

  const [{ data: data1 }, { data: data2 }, { data: data3 }] =
  await Promise.all([
    res1.json(), res2.json(), res3.json(),
  ]);

  const usage1: Record<string, number> = extractUsage(data1);
  const usage2: Record<string, number> = extractUsage(data2);
  const usage3: Record<string, number> = extractUsage(data3);

  const tieredPokemon: string[] = [];
  for (const key in data1) {
    if (
      (currData[key] && usage1[key] && usage2[key] && usage3[key]) &&
      usage1[key] + usage2[key] + usage3[key] >= 3 * 0.0452
    ) {
      tieredPokemon.push(key);
    }
  }

  return tieredPokemon;
}


/**
 * Given the name of the Pokemon, scrapes the PokeAPI website
 * to find the Pokemon's base stats and returns them in an array with
 * the following order,
 * [hp, atk, def, spa, spd, spe].
 * Throws error if Pokemon cannot be found
 * 
 * @param {string} pokemon
 * @throws {Error} if the Pokemon cannot be found
 * @returns {Promise<number[]>} if the Pokemon is found
 */
export async function scrapeBaseStats(pokemon: string): Promise<number[]> {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (!response.ok) {
    const formResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}`);
    
    if (!formResponse.ok) {
      throw new Error(`Pokemon "${pokemon}" not found`);
    } else {
      const formData = await formResponse.json();
      response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formData.pokemon.name}`);
    }
  }

  const data: PokemonStatResponse = await response.json();
  return data.stats.map((stat) => stat.base_stat);
}

/**
 * Given the name of the Pokemon, scrapes the PokeAPI website
 * to find the Pokemon's types.
 * Returns an array of strings containing the Pokemon's types.
 * If the Pokemon has 1 type, pushes 'none' into the array.
 * Types are returned in the Pokemon's order.
 *
 * @param {string} pokemon
 * @throws {Error} if the Pokemon cannot be found
 * @returns {Promise<string[]>} if the Pokemon is found
 */
export async function scrapeTypes(pokemon: string): Promise<string[]> {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (!response.ok) {
    const formResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}`);
    
    if (!formResponse.ok) {
      throw new Error(`Pokemon "${pokemon}" not found`);
    } else {
      response = formResponse;
    }
  }

  const data: PokemonTypeResponse = await response.json();

  const types: string[] = data.types.map((t) => t.type.name);
  if (types.length === 1) {
    types.push('none');
  }

  return types;
}

/**
 * Given the spriteName for a Pokemon, scrapes the Pokemon Showdown
 * website to find its gen5 sprite as a gif.
 * If the gif can't be found, tries to find the sprite as a png.
 *
 * Returns the sprite as a blob if either is found.
 * Throws an error if neither sprite cannot be found.
 *
 * @param {string} spriteName
 * @returns {Promise<Blob>}
 * @throws {Error}
 */
export async function scrapeSprite(
  spriteName: string
): Promise<{blob: Blob, type: SpriteType}> {
  let response = await fetch(
    `https://play.pokemonshowdown.com/sprites/gen5ani/${spriteName}.gif`
  );
  let spriteType = SpriteType.GIF;

  if (!response.ok) {
    response = await fetch(
      `https://play.pokemonshowdown.com/sprites/gen5/${spriteName}.png`
    );
    spriteType = SpriteType.PNG;

    if (!response.ok) {
      throw new Error(`"${spriteName}" sprite not found`);
    }
  }

  return {blob: await response.blob(), type: spriteType};
}
