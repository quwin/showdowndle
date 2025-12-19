export enum Natures {
  ADAMANT = '+Atk, -SpA', BASHFUL = 'Neutral', BOLD = '+Def, -Atk', BRAVE = '+Atk, -Spe',
  CALM = "+SpD, -Atk", CAREFUL = '+SpD, -SpA', DOCILE = 'Neutral', GENTLE = '+SpD, -Def',
  HARDY = 'Neutral', HASTY = '+Spe, -Def', IMPISH = '+Def, -Atk', JOLLY = '+Spe, -SpA',
  LAX = '+Def, -SpD', LONELY = '+Atk, -Def', MILD = "+SpA, -Def", MODEST = '+SpA, -Atk',
  NAIVE = '+Spe, -Def', NAUGHTY = '+Atk, -SpD', QUIET = '+SpA, -Spe', QUIRKY = 'Neutral',
  RASH = '+SpA, -SpD', RELAXED = '+Def, -Spe', SASSY = '+SpD, -Spe', SERIOUS = 'Neutral',
  TIMID = '+Spe, -Atk'
}

export enum Stats {
  HP = 'HP', ATK = 'Attack', DEF = 'Defense',
  SPA = 'Special-Attack', SPD = 'Special-Defense', SPE = 'Speed'
}

export enum Correctness {
  FALSE, PARTIAL, TRUE
}

export enum SpriteType {
  GIF, PNG
}

export interface Nature {
  nature: string,
  statChanges: string
}

export interface NameData {
  smogonName: string,
  pokeApiName: string
};

export interface PokemonGuessData {
  name: string,
  usage: number,
  types: string[],
  bst: number,
  highestStat: string,
}

export interface GuessResult {
  name: boolean,
  usage: number,
  type1: Correctness,
  type2: Correctness,
  bst: number,
  highestStat: boolean
}

export interface StatisticsBlock {
  [key: string]: number
}

interface ChecksAndCounters {
  [key: string]: number[]
}

export interface PokemonDataBlock {
  'Raw count': number,
  'Viability Ceiling': number[],
  Abilities: StatisticsBlock,
  Items: StatisticsBlock,
  Spreads: StatisticsBlock,
  Moves: StatisticsBlock,
  'Tera Types': StatisticsBlock,
  Happiness: StatisticsBlock,
  Teammates: StatisticsBlock,
  'Checks and Counters': ChecksAndCounters,
  usage: number
}

export interface FullTierData {
  [key: string]: PokemonDataBlock
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonStatResponse {
  stats: PokemonStat[];
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonTypeResponse {
  types: PokemonType[];
}
