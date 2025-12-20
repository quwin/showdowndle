import { extractUsage } from './dataCollector.js';
import { FullTierData } from './dataStore.js';
import { convertToSmogonSpriteName } from './nameConverters.js';
const SERVER_URL = '/api/';

export async function fetchLatestTierData(
  gen: number, tier: string
) : Promise<FullTierData> {
  const response = await fetch(
    `${SERVER_URL}metagame-data/${gen}/${tier}`
  );

  if (!response.ok) {
    throw new Error(`Server error (${response.status})`);
  }

  return await response.json();
}

export async function fetchPokemonInTier(
  gen: number, tier: string, tierData: FullTierData
) : Promise<string[]> {
  const response = await fetch(
    `${SERVER_URL}tier-pokemon/${gen}/${tier}`, {
      method: 'POST',
      body: JSON.stringify({tierData: extractUsage(tierData)}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Server error (${response.status})`);
  }

  return await response.json();
}

export async function fetchSprite(
  pokemon: string
) : Promise<Blob> {
  const name: string = convertToSmogonSpriteName(pokemon);
  const response = await fetch(`${SERVER_URL}sprite/${name}`);

  if (!response.ok) {
    throw new Error(`Server error (${response.status})`);
  }

  return await response.blob();
}
