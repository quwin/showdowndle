import { NameData } from "./dataStore.ts";

function nidoranNameConverter(name: string): NameData {
  if (name.includes('f')) {
    return {
      smogonName: 'NidoranF',
      pokeApiName: 'nidoran-f'
    };
  } else {
    return {
      smogonName: 'NidoranM',
      pokeApiName: 'nidoran-m'
    };
  }
}

function ogerponNameConverter(name: string): NameData {
  if (name.includes('wellspring')) {
    return {
      smogonName: 'ogerpon-wellspring',
      pokeApiName: 'ogerpon-wellspring-mask'
    };
  } else if (name.includes('hearthflame')) {
    return {
      smogonName: 'ogerpon-hearthflame',
      pokeApiName: 'ogerpon-hearthflame-mask'
    };
  } else if (name.includes('cornerstone')) {
    return {
      smogonName: 'ogerpon-cornerstone',
      pokeApiName: 'ogerpon-cornerstone-mask'
    };
  } else {
    return {
      smogonName: 'ogerpon',
      pokeApiName: 'ogerpon'
    }; 
  }
}

function oricorioNameConverter(name: string): NameData {
  if (name.includes('pom-pom') || name.includes('pom pom')) {
    return {
      smogonName: 'oricorio-pom-pom',
      pokeApiName: 'oricorio-pom-pom'
    };
  } else if (name.includes('pau') || name.includes('pa\'u')) {
    return {
      smogonName: 'oricorio-pa\'u',
      pokeApiName: 'oricorio-pau'
    };
  } else if (name.includes('sensu')) {
    return {
      smogonName: 'oricorio-sensu',
      pokeApiName: 'oricorio-sensu'
    };
  } else {
    return {
      smogonName: 'oricorio',
      pokeApiName: 'oricorio-baile'
    }; 
  }
}

function paldeanTaurosNameConverter(name: string): NameData {
  if (name.includes('aqua')) {
    return {
      smogonName: 'tauros-paldea-aqua',
      pokeApiName: 'tauros-paldea-aqua-breed'
    };
  } else if (name.includes('blaze')) {
    return {
      smogonName: 'tauros-paldea-blaze',
      pokeApiName: 'tauros-paldea-blaze-breed'
    };
  } else {
    return {
      smogonName: 'tauros-paldea-combat',
      pokeApiName: 'tauros-paldea-combat-breed'
    }; 
  }
}

function shayminNameConverter(name: string): NameData {
  if (name.includes('sky')) {
    return {
      smogonName: 'shaymin-sky',
      pokeApiName: 'shaymin-sky'
    };
  } else {
    return {
      smogonName: 'shaymin',
      pokeApiName: 'shaymin-land'
    }; 
  }
}

function basculinNameConverter(): NameData {
  return {
    smogonName: 'basculin',
    pokeApiName: 'basculin-red-striped'
  };
}

function genderNameConverter(name: string, pokemon: string): NameData {
  if (name.includes('f')) {
    return {
      smogonName: pokemon + '-f',
      pokeApiName: pokemon + '-female'
    };
  } else {
    return {
      smogonName: pokemon,
      pokeApiName: pokemon + '-male'
    };
  }
}

function darmanitanNameConverter(name: string): NameData {
  if (name.includes('galar')) {
    return {
      smogonName: 'darmanitan-galar',
      pokeApiName: 'darmanitan-galar-standard'
    };
  } else {
    return {
      smogonName: 'darmanitan',
      pokeApiName: 'darmanitan-standard'
    };
  }
}

function genieNameConverter(name: string, form: number): NameData {
  const genies: string[] = [
    'tornadus', 'thundurus', 'landorus', 'enamorus'
  ]

  if (name.includes(' t') || name.includes('-t')) {
    return {
      smogonName: genies[form] + '-therian',
      pokeApiName: genies[form] + '-therian'
    };
  } else {
    return {
      smogonName: genies[form],
      pokeApiName: genies[form] + '-incarnate'
    };
  }
}

function meloettaNameConverter(): NameData {
  return {
    smogonName: 'meloetta',
    pokeApiName: 'meloetta-aria'
  };
}

function aegislashNameConverter(): NameData {
  return {
    smogonName: 'aegislash',
    pokeApiName: 'aegislash-shield'
  };
}

function pumpkabooLineNameConverter(
  name: string, positionInEvoLine: number
): NameData {
  const evolutionLine: string[] = ['pumpkaboo', 'gourgeist'];

  if (name.includes('small')) {
    return {
      smogonName: evolutionLine[positionInEvoLine] + '-small',
      pokeApiName: evolutionLine[positionInEvoLine] + '-small'
    };
  } else if (name.includes('large')) {
    return {
      smogonName: evolutionLine[positionInEvoLine] + '-large',
      pokeApiName: evolutionLine[positionInEvoLine] + '-large'
    };
  } else if (name.includes('super') || name.includes('jumbo')) {
    return {
      smogonName: evolutionLine[positionInEvoLine] + '-super',
      pokeApiName: evolutionLine[positionInEvoLine] + '-super'
    };
  } else {
    return {
      smogonName: evolutionLine[positionInEvoLine],
      pokeApiName: evolutionLine[positionInEvoLine] + '-average'
    };
  }
}

function zygardeNameConverter(name: string): NameData {
  if (name.includes('10')) {
    return {
      smogonName: 'zygarde-10%',
      pokeApiName: 'zygarde-10'
    };
  } else {
    return {
      smogonName: 'zygarde',
      pokeApiName: 'zygarde-50'
    };
  }
}

function lycanrocNameConverter(name: string): NameData {
  if (name.includes('midnight')) {
    return {
      smogonName: 'lycanroc-midnight',
      pokeApiName: 'lycanroc-midnight'
    };
  } else if (name.includes('dusk')) {
    return {
      smogonName: 'lycanroc-dusk',
      pokeApiName: 'lycanroc-dusk'
    };
  } else {
    return {
      smogonName: 'lycanroc',
      pokeApiName: 'lycanroc-midday'
    };
  }
}

function wishiwashiNameConverter(): NameData {
  return {
    smogonName: 'wishiwashi',
    pokeApiName: 'wishiwashi-solo'
  };
}

function miniorNameConverter(): NameData {
  return {
    smogonName: 'minior',
    pokeApiName: 'minior-red'
  };
}

function mimikyuNameConverter(): NameData {
  return {
    smogonName: 'mimikyu',
    pokeApiName: 'mimikyu-disguised'
  };
}

function necrozmaNameConverter(form: number): NameData {
  const form1: string[] = ['-dawn', '-dusk'];
  const form2: string[] = ['-wings', '-mane'];

  return {
    smogonName: 'necrozma' + form1[form] + form2[form],
    pokeApiName: 'necrozma' + form1[form]
  }
}

function toxtricityNameConverter(): NameData {
  return {
    smogonName: 'toxtricity',
    pokeApiName: 'toxtricity-amped'
  };
}

function eiscueNameConverter(): NameData {
  return {
    smogonName: 'eiscue',
    pokeApiName: 'eiscue-ice'
  };
}

function morpekoNameConverter(): NameData {
  return {
    smogonName: 'morpeko',
    pokeApiName: 'morpeko-full-belly'
  };
}

function urshifuNameConverter(name: string): NameData {
  if (name.includes('rapid')) {
    return {
      smogonName: 'urshifu-rapid-strike',
      pokeApiName: 'urshifu-rapid-strike'
    };
  } else {
    return {
      smogonName: 'urshifu',
      pokeApiName: 'urshifu-single-strike'
    };
  }
}

function mausholdNameConverter(): NameData {
  return {
    smogonName: 'maushold',
    pokeApiName: 'maushold-family-of-four'
  };
}

function squawkabillyNameConverter(): NameData {
  return {
    smogonName: 'squawkabilly',
    pokeApiName: 'squawkabilly-green-plumage'
  };
}

function palafinNameConverter(): NameData {
  return {
    smogonName: 'palafin',
    pokeApiName: 'palafin-hero'
  };
}

function tatsugiriNameConverter(): NameData {
  return {
    smogonName: 'tatsugiri',
    pokeApiName: 'tatsugiri-curly'
  };
}

function dudunsparceNameConverter(): NameData {
  return {
    smogonName: 'dudunsparce',
    pokeApiName: 'dudunsparce-two-segment'
  };
}

function terapagosNameConverter(): NameData {
  return {
    smogonName: 'terapagos',
    pokeApiName: 'terapagos-terastal'
  };
}

function keldeoNameConverter(): NameData {
  return {
    smogonName: 'keldeo',
    pokeApiName: 'keldeo-ordinary'
  };
}

function mrMimeNameConverter(name: string): NameData {
  if (name.includes('galar')) {
    return {
      smogonName: 'mr. mime-galar',
      pokeApiName: 'mr-mime-galar'
    };
  } else {
    return {
      smogonName: 'mr. mime',
      pokeApiName: 'mr-mime'
    };
  }
}

function mrRimeNameConverter(): NameData {
  return {
    smogonName: 'mr. rime',
    pokeApiName: 'mr-rime'
  };
}

function mimeJrNameConverter(): NameData {
  return {
    smogonName: 'mime jr.',
    pokeApiName: 'mime-jr'
  };
}

function farfetchdNameConverter(name: string): NameData {
  if (name.includes('galar')) {
    return {
      smogonName: 'farfetch\'d-galar',
      pokeApiName: 'farfetchd-galar'
    };
  } else {
    return {
      smogonName: 'farfetch\'d',
      pokeApiName: 'farfetchd'
    };
  }
}

function sirfetchdNameConverter(): NameData {
  return {
    smogonName: 'sirfetch\'d',
    pokeApiName: 'sirfetchd'
  };
}

function typeNullNameConverter(): NameData {
  return {
    smogonName: 'type: null',
    pokeApiName: 'type-null'
  };
}

/**
 * Checks if the given pokemon name contains one of
 * ['mega ', 'mega-', ' mega', '-mega'],
 * and returns it if it does.
 * 
 * @param {string} name 
 * @returns {string} if it is a mega
 * @returns {null} if it is not
 */
function isMega(name: string): string | null {
  const formats: string[] = ['mega ', 'mega-', ' mega', '-mega'];

  for (const format of formats) {
    if (name.includes(format)) {
      return format
    }
  }

  return null;
}

/**
 * Function that converts regional forms into the proper formatting for
 * Smogon and PokeApi.
 * Assumes name is in the following formaats for any existing regional variant
 * Note: the hyphen in the 4 examples can be any character, including a space
 * ['alola-muk', 'muk-alola', 'alolan-muk', 'muk-alolan']
 * and converts it to 'muk-alola'.
 * 
 * @param {string} name 
 * @param {number} region
 * @returns {NameData}
 */
function regionalNameConverter(name: string, region: number): NameData {
  const regions: string[] = ['alola', 'galar', 'hisui', 'paldea'];
  const belonging: string[] = ['alolan', 'galarian', 'hisuian', 'paldean'];

  // Stops an error if the name is just 'alola' or 'alolan' for example
  if (
    (name.includes(belonging[region]) &&
    name.length == belonging[region].length) ||
    (name.includes(regions[region]) &&
    name.length == regions[region].length)
  ) {
    return {smogonName: name, pokeApiName: name}
  }

  if (name.includes(belonging[region])) {
    if (name.indexOf(belonging[region]) === 0) {
      return {
        smogonName: name.slice(
          belonging[region].length + 1) + '-' + regions[region],
        pokeApiName: name.slice(
          belonging[region].length + 1) + '-' + regions[region]
      };
    } else {
      return {
        smogonName: name.slice(
          0, name.length - belonging[region].length - 1) + '-' + regions[region],
        pokeApiName: name.slice(
          0, name.length - belonging[region].length - 1) + '-' + regions[region]
      };
    }
  } else {
     if (name.indexOf(regions[region]) === 0) {
      return {
        smogonName: name.slice(
          regions[region].length + 1) + '-' + regions[region],
        pokeApiName: name.slice(
          regions[region].length + 1) + '-' + regions[region]
      };
    } else {
      return {
        smogonName: name.replaceAll(' ', '-'),
        pokeApiName: name.replaceAll(' ', '-')
      }
    }
  }
}

function hasHyphenInName(name: string): boolean {
  if(
    (name.includes('ho') && name.includes('oh')) ||
    (name.includes('porygon') && name.includes('z')) ||
    (name.includes('wo') && name.includes('chien')) ||
    (name.includes('chi') && name.includes('yu')) ||
    (name.includes('chien') && name.includes('pao')) ||
    (name.includes('ting') && name.includes('lu')) ||
    name.includes('deoxys') ||
    name.includes('kyurem') ||
    name.includes('zamazenta') ||
    name.includes('zacian') ||
    name.includes('arceus') ||
    name.includes('silvally') ||
    name.includes('ursaluna') ||
    name.includes('giratina') ||
    name.includes('dialga') ||
    name.includes('palkia') ||
    name.includes('rotom') ||
    name.includes('kommo') ||
    name.includes('hakamo') ||
    name.includes('jangmo') ||
    name.includes('calyrex')
  ) {
    return true;
  } else {
    return false;
  }
}

function hasSpaceInName(name: string): boolean {
  if(
    (name.includes('great') && name.includes('tusk')) ||
    (name.includes('scream') && name.includes('tail')) ||
    (name.includes('brute') && name.includes('bonnet')) ||
    (name.includes('flutter') && name.includes('mane')) ||
    (name.includes('slither') && name.includes('wing')) ||
    (name.includes('sandy') && name.includes('shocks')) ||
    (name.includes('roaring') && name.includes('moon')) ||
    (name.includes('walking') && name.includes('wake')) ||
    (name.includes('gouging') && name.includes('fire')) ||
    (name.includes('raging') && name.includes('bolt')) ||
    name.includes('iron') ||
    name.includes('tapu')
  ) {
    return true;
  } else {
    return false;
  }
}

function megaXYform(name: string, pokemon: string): NameData {
  if (name.includes('x')) {
    return {
      smogonName: pokemon + '-mega-x',
      pokeApiName: pokemon + '-mega-x'
    };
  } else {
    return {
      smogonName: pokemon + '-mega-y',
      pokeApiName: pokemon + '-mega-y'
    };
  }
}

function megaZform(name: string, pokemon: string): NameData {
  if (name.includes('z')) {
    return {
      smogonName: pokemon + '-mega' + '-z',
      pokeApiName: pokemon + '-mega' + '-z'
    };
  } else {
    return {
      smogonName: pokemon + '-mega',
      pokeApiName: pokemon + '-mega'
    };
  }
}

/**
 * Given a mega Pokemon, converts the name to fit the Smogon
 * and PokeApi formats.
 * 
 * @param {string} name 
 * @param {string} mega 
 * @returns {NameData}
 */
function megaNameConverter(name: string, mega: string): NameData {
  if (name.includes('charizard')) {
    return megaXYform(name, 'charizard');
  } else if (name.includes('mewtwo')) {
    return megaXYform(name, 'mewtwo');
  } else if (name.includes('raichu')) {
    return megaXYform(name, 'raichu');
  } else if (name.includes('absol')) {
    return megaZform(name, 'absol');
  } else if (name.includes('garchomp')) {
    return megaZform(name, 'garchomp');
  } else if (name.includes('lucario')) {
    return megaZform(name, 'lucario');
  }

  if (mega === 'mega ' || mega === 'mega-') {
    return {
      smogonName: name.slice(mega.length) + '-mega',
      pokeApiName: name.slice(mega.length) + '-mega'
    };
  } else {
    return {
      smogonName: name.slice(0, name.length - mega.length) + '-mega',
      pokeApiName: name.slice(0, name.length - mega.length) + '-mega'
    };
  }
}

/**
 * Given a Pokemon name, converts it to the Smogon and PokeApi
 * format for the following:
 * - NidoranF and NidoranM
 * - Ogerpon
 * - Oricorio
 * - Paldean Tauros
 * - Shaymin
 * - Basculin
 * - Basculegion
 * - Darmanitan and Galarian Darmanitan
 * - The 4 Genies
 * - Meloetta
 * - Aegislash
 * - Pumpkaboo and Gourgeist
 * - Zygarde
 * - Lycanroc
 * - Wishiwashi
 * - Minior
 * - Mimikyu
 * - Dawn Wings and Dusk Mane Necrozma
 * - Toxtricity
 * - Eiscue
 * - Indeedee
 * - Morpeko
 * - Urshifu Single and Rapid Strike
 * - Maushold
 * - Oinkologne
 * - Palafin
 * - Tatsugiri
 * - Dudunsparce
 * - Terapagos
 * - Keldeo
 * - Mr. Mime, Galarian Mr. Mime, Mr. Rime and Mime Jr.
 * - Farfetch'd, Galarian Farfetch'd and Sirfetch'd
 * - Type: null
 * - All regional variants
 * - All mega Pokemon
 * 
 * @param {string} pokemon 
 * @returns {NameData}
 */
export function convertToSmogonAndPokeApiName(pokemon: string): NameData {
  const smogonName = pokemon.toLowerCase().trim();
  const pokeApiName = smogonName;

  if (smogonName.includes('nidoran')) {
    return nidoranNameConverter(smogonName);
  } else if (smogonName.includes('ogerpon')) {
    return ogerponNameConverter(smogonName);
  } else if (smogonName.includes('oricorio')) {
    return oricorioNameConverter(smogonName);
  } else if (smogonName.includes('tauros') && smogonName.includes('paldea')) {
    return paldeanTaurosNameConverter(smogonName);
  } else if (smogonName.includes('shaymin')) {
    return shayminNameConverter(smogonName);
  } else if (smogonName.includes('basculin')) {
    return basculinNameConverter();
  } else if (smogonName.includes('basculegion')) {
    return genderNameConverter(smogonName, 'basculegion');
  } else if (smogonName.includes('darmanitan')) {
    return darmanitanNameConverter(smogonName);
  } else if (smogonName.includes('tornadus')) {
    return genieNameConverter(smogonName, 0);
  } else if (smogonName.includes('thundurus')) {
    return genieNameConverter(smogonName, 1);
  } else if (smogonName.includes('landorus')) {
    return genieNameConverter(smogonName, 2);
  } else if (smogonName.includes('enamorus')) {
    return genieNameConverter(smogonName, 3);
  } else if (smogonName.includes('meloetta')) {
    return meloettaNameConverter();
  } else if (smogonName.includes('meowstic') && !smogonName.includes('mega')) {
    return genderNameConverter(smogonName, 'meowstic');
  } else if (smogonName.includes('aegislash')) {
    return aegislashNameConverter();
  } else if (smogonName.includes('pumpkaboo')) {
    return pumpkabooLineNameConverter(smogonName, 0);
  } else if (smogonName.includes('gourgeist')) {
    return pumpkabooLineNameConverter(smogonName, 1);
  } else if (smogonName.includes('zygarde') && !smogonName.includes('mega')) {
    return zygardeNameConverter(smogonName);
  } else if (smogonName.includes('lycanroc')) {
    return lycanrocNameConverter(smogonName);
  } else if (smogonName.includes('wishiwashi')) {
    return wishiwashiNameConverter();
  } else if (smogonName.includes('minior')) {
    return miniorNameConverter();
  } else if (smogonName.includes('mimikyu')) {
    return mimikyuNameConverter();
  } else if (smogonName.includes('necrozma') && smogonName.includes('dawn')) {
    return necrozmaNameConverter(0);
  } else if (smogonName.includes('necrozma') && smogonName.includes('dusk')) {
    return necrozmaNameConverter(1);
  } else if (smogonName.includes('toxtricity')) {
    return toxtricityNameConverter();
  } else if (smogonName.includes('eiscue')) {
    return eiscueNameConverter();
  } else if (smogonName.includes('indeedee')) {
    return genderNameConverter(smogonName, 'indeedee');
  } else if (smogonName.includes('morpeko')) {
    return morpekoNameConverter();
  } else if (smogonName.includes('urshifu')) {
    return urshifuNameConverter(smogonName);
  } else if (smogonName.includes('maushold')) {
    return mausholdNameConverter();
  } else if (smogonName.includes('oinkologne')) {
    return genderNameConverter(smogonName, 'oinkologne');
  } else if (smogonName.includes('squawkabilly')) {
    return squawkabillyNameConverter();
  } else if (smogonName.includes('palafin')) {
    return palafinNameConverter();
  } else if (smogonName.includes('tatsugiri')) {
    return tatsugiriNameConverter();
  } else if (smogonName.includes('dudunsparce')) {
    return dudunsparceNameConverter();
  } else if (smogonName.includes('terapagos')) {
    return terapagosNameConverter();
  } else if (smogonName.includes('keldeo')) {
    return keldeoNameConverter();
  } else if (smogonName.includes('mr') && smogonName.includes('mime')) {
    return mrMimeNameConverter(smogonName);
  } else if (smogonName.includes('mr') && smogonName.includes('rime')) {
    return mrRimeNameConverter();
  } else if (smogonName.includes('jr') && smogonName.includes('mime')) {
    return mimeJrNameConverter();
  } else if (smogonName.includes('farfetch')) {
    return farfetchdNameConverter(smogonName);
  } else if (smogonName.includes('sirfetch')) {
    return sirfetchdNameConverter();
  } else if (smogonName.includes('type') && smogonName.includes('null')) {
    return typeNullNameConverter();
  } else if (smogonName.includes('alola')) {
    return regionalNameConverter(smogonName, 0);
  } else if (smogonName.includes('galar')) {
    return regionalNameConverter(smogonName, 1);
  } else if (smogonName.includes('hisui')) {
    return regionalNameConverter(smogonName, 2);
  } else if (smogonName.includes('paldea')) {
    return regionalNameConverter(smogonName, 3);
  } else if (hasHyphenInName(smogonName)) {
    return {
      smogonName: smogonName.replace(' ', '-'),
      pokeApiName: smogonName
    };
  } else if (hasSpaceInName(smogonName)) {
    return {
      smogonName: smogonName.replace('-', ' '),
      pokeApiName: smogonName
    };
  }

  const mega: string = isMega(smogonName);
  if (mega) {
    return megaNameConverter(smogonName, mega);
  }

  return {smogonName: smogonName, pokeApiName: pokeApiName};
}

/**
 * Converts the given smogon name into the
 * name used in the smogon's sprites folder
 * @param {string} smogonName 
 * @returns {string}
 */
export function convertToSmogonSpriteName(
  smogonName: string
): string {
  smogonName = smogonName.toLowerCase();
  let spriteName = smogonName;

  if (smogonName.includes('\'')) {
    spriteName = spriteName.replace('\'', '');
  } else if (smogonName.includes('.')) {
    spriteName = spriteName.replace('.', '');
  } else if (smogonName.includes('%')) {
    spriteName = spriteName.replace('%', '');
  } else if (smogonName.includes(':')) {
    spriteName = spriteName.replace(':', '');
  } else if (smogonName === 'ogerpon') {
    spriteName += '-teal';
  } else if (smogonName === 'terapagos') {
    spriteName += '-terastal';
  } else if (
    smogonName === 'oricorio-pom-pom' ||
    smogonName === 'ho-oh' ||
    smogonName === 'porygon-z' ||
    smogonName.includes('tauros-paldea') ||
    smogonName.includes('mega-') ||
    smogonName.includes('dusk-mane') ||
    smogonName.includes('dawn-wings')
  ) {
    spriteName = spriteName.replace(/-(?!.*-)/, '');
  }

  return spriteName.replace(' ', '');
}