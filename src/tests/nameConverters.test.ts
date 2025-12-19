import { convertToSmogonAndPokeApiName, convertToSmogonSpriteName } from "../nameConverters";

describe('Oricorio test', () => {
  test('Baile form', () => {
    const result = {smogonName: 'oricorio', pokeApiName: 'oricorio-baile'};
    const acceptedResponses: string[] = [
      'oricorio', 'oricorio-baile', 'oricorio baile'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Pa\'u form', () => {
    const result = {smogonName: 'oricorio-pa\'u', pokeApiName: 'oricorio-pau'};
    const acceptedResponses: string[] = [
      'oricorio-pa\'u', 'oricorio-pau', 'oricorio pa\'u', 'oricorio pau'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Pom-Pom form', () => {
    const result = {smogonName: 'oricorio-pom-pom', pokeApiName: 'oricorio-pom-pom'};
    const acceptedResponses: string[] = [
      'oricorio-pom-pom', 'oricorio pom-pom', 'oricorio pom pom'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Sensu form', () => {
    const result = {smogonName: 'oricorio-sensu', pokeApiName: 'oricorio-sensu'};
    const acceptedResponses: string[] = [
      'oricorio-sensu', 'oricorio sensu'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Ogerpon test', () => {
  test('Regular form', () => {
    const result = {smogonName: 'ogerpon', pokeApiName: 'ogerpon'};
    const acceptedResponses: string[] = [
      'ogerpon', 'ogerpon-teal', 'ogerpon teal', 'ogerpon-teal-mask',
      'ogerpon teal-mask', 'ogerpon teal mask'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Wellspring form', () => {
    const result = {
      smogonName: 'ogerpon-wellspring', pokeApiName: 'ogerpon-wellspring-mask'
    };
    const acceptedResponses: string[] = [
      'ogerpon-wellspring', 'ogerpon wellspring', 'ogerpon-wellspring-mask',
      'ogerpon wellspring-mask', 'ogerpon wellspring mask'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Cornerstone form', () => {
    const result = {
      smogonName: 'ogerpon-cornerstone', pokeApiName: 'ogerpon-cornerstone-mask'
    };
    const acceptedResponses: string[] = [
      'ogerpon-cornerstone', 'ogerpon cornerstone', 'ogerpon-cornerstone-mask',
      'ogerpon cornerstone-mask', 'ogerpon cornerstone mask'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Hearthflame form', () => {
    const result = {
      smogonName: 'ogerpon-hearthflame', pokeApiName: 'ogerpon-hearthflame-mask'
    };
    const acceptedResponses: string[] = [
      'ogerpon-hearthflame', 'ogerpon hearthflame', 'ogerpon-hearthflame-mask',
      'ogerpon hearthflame-mask', 'ogerpon hearthflame mask'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Paldean Tauros test', () => {
  test('Combat form', () => {
    const result = {
      smogonName: 'tauros-paldea-combat', pokeApiName: 'tauros-paldea-combat-breed'
    };
    const acceptedResponses: string[] = [
      'tauros-paldea', 'tauros paldea', 'paldean-tauros', 'paldean tauros',
      'tauros-paldea-combat', 'tauros-paldea combat', 'tauros paldea combat',
      'paldean-tauros-combat', 'paldean-tauros combat', 'paldean tauros combat',
      'tauros-paldea-combat-breed', 'tauros-paldea combat-breed',
      'tauros paldea combat breed', 'paldean-tauros-combat-breed',
      'paldean-tauros combat-breed', 'paldean tauros combat breed'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Blaze form', () => {
    const result = {
      smogonName: 'tauros-paldea-blaze', pokeApiName: 'tauros-paldea-blaze-breed'
    };
    const acceptedResponses: string[] = [
      'tauros-paldea-blaze', 'tauros-paldea blaze', 'tauros paldea blaze',
      'paldean-tauros-blaze', 'paldean-tauros blaze', 'paldean tauros blaze',
      'tauros-paldea-blaze-breed', 'tauros-paldea blaze-breed',
      'tauros paldea blaze breed', 'paldean-tauros-blaze-breed',
      'paldean-tauros blaze-breed', 'paldean tauros blaze breed'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Aqua form', () => {
    const result = {
      smogonName: 'tauros-paldea-aqua', pokeApiName: 'tauros-paldea-aqua-breed'
    };
    const acceptedResponses: string[] = [
      'tauros-paldea-aqua', 'tauros-paldea aqua', 'tauros paldea aqua',
      'paldean-tauros-aqua', 'paldean-tauros aqua', 'paldean tauros aqua',
      'tauros-paldea-aqua-breed', 'tauros-paldea aqua-breed',
      'tauros paldea aqua breed', 'paldean-tauros-aqua-breed',
      'paldean-tauros aqua-breed', 'paldean tauros aqua breed'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Shaymin test', () => {
  test('Regular form', () => {
    const result = {smogonName: 'shaymin', pokeApiName: 'shaymin-land'};
    const acceptedResponses: string[] = [
      'shaymin', 'shaymin-land', 'shaymin land'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
  test('Sky form', () => {
    const result = {smogonName: 'shaymin-sky', pokeApiName: 'shaymin-sky'};
    const acceptedResponses: string[] = [
      'shaymin-sky', 'shaymin sky'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Darmanitan test', () => {
  test('Regular form', () => {
    const result = {smogonName: 'darmanitan', pokeApiName: 'darmanitan-standard'};
    const acceptedResponses: string[] = [
      'darmanitan', 'darmanitan-standard', 'darmanitan standard',
      'darmanitan-zen', 'darmanitan zen', 'darmanitan-zen-mode',
      'darmanitan zen-mode', 'darmanitan zen mode'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
  test('Galarian form', () => {
    const result = {
      smogonName: 'darmanitan-galar', pokeApiName: 'darmanitan-galar-standard'
    };
    const acceptedResponses: string[] = [
      'darmanitan-galar', 'darmanitan galar', 'darmanitan-galar-standard',
      'darmanitan galar standard', 'darmanitan-galar standard',
      'darmanitan-galar-zen', 'darmanitan galar zen', 'darmanitan-galar zen',
      'darmanitan-galar-zen-mode', 'darmanitan galar zen mode',
      'darmanitan-galar zen-mode', 'darmanitan-galar zen mode',
      'darmanitan galar zen-mode', 'galarian-darmanitan',
      'galarian darmanitan', 'galarian-darmanitan-standard',
      'galarian darmanitan standard', 'galarian-darmanitan standard',
      'galarian-darmanitan-zen', 'galarian darmanitan zen',
      'galarian-darmanitan zen', 'galarian-darmanitan-zen-mode',
      'galarian darmanitan zen mode', 'galarian-darmanitan zen-mode',
      'galarian darmanitan zen-mode', 'galarian-darmanitan zen mode',
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Genie tests', () => {
  test('Incarnate forms', () => {
    const results = [
      {smogonName: 'tornadus', pokeApiName: 'tornadus-incarnate'},
      {smogonName: 'thundurus', pokeApiName: 'thundurus-incarnate'},
      {smogonName: 'landorus', pokeApiName: 'landorus-incarnate'},
      {smogonName: 'enamorus', pokeApiName: 'enamorus-incarnate'},
    ];
    const acceptedResponses: string[] = [
      'tornadus', 'thundurus', 'landorus', 'enamorus', 'tornadus-incarnate',
      'thundurus-incarnate', 'landorus-incarnate', 'enamorus-incarnate',
      'tornadus incarnate', 'thundurus incarnate', 'landorus incarnate',
      'enamorus incarnate', 'tornadus-i', 'thundurus-i', 'landorus-i',
      'enamorus-i', 'tornadus i', 'thundurus i', 'landorus i',
      'enamorus i',
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 4]);
    }
  });
  test('Therian forms', () => {
    const results = [
      {smogonName: 'tornadus-therian', pokeApiName: 'tornadus-therian'},
      {smogonName: 'thundurus-therian', pokeApiName: 'thundurus-therian'},
      {smogonName: 'landorus-therian', pokeApiName: 'landorus-therian'},
      {smogonName: 'enamorus-therian', pokeApiName: 'enamorus-therian'},
    ];
    const acceptedResponses: string[] = [
      'tornadus-therian', 'thundurus-therian', 'landorus-therian',
      'enamorus-therian', 'tornadus therian', 'thundurus therian',
      'landorus therian', 'enamorus therian', 'tornadus-t', 'thundurus-t',
      'landorus-t', 'enamorus-t', 'tornadus t', 'thundurus t', 'landorus t',
      'enamorus t',
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 4]);
    }
  });
});

describe('Pumpkaboo and Gourgeist tests', () => {
  test('Small size', () => {
    const results = [
      {smogonName: 'pumpkaboo-small', pokeApiName: 'pumpkaboo-small'},
      {smogonName: 'gourgeist-small', pokeApiName: 'gourgeist-small'}
    ];
    const acceptedResponses: string[] = [
      'pumpkaboo-small', 'gourgeist-small', 'pumpkaboo small',
      'gourgeist small', 'pumpkaboo-small-variety',
      'gourgeist-small-variety', 'pumpkaboo small variety',
      'gourgeist small variety', 'pumpkaboo-small-size',
      'gourgeist-small-size', 'pumpkaboo small size',
      'gourgeist small size',
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 2]);
    }
  });

  test('Average size', () => {
    const results = [
      {smogonName: 'pumpkaboo', pokeApiName: 'pumpkaboo-average'},
      {smogonName: 'gourgeist', pokeApiName: 'gourgeist-average'}
    ];
    const acceptedResponses: string[] = [
      'pumpkaboo', 'gourgeist', 'pumpkaboo-average',
      'gourgeist-average', 'pumpkaboo average',
      'gourgeist average', 'pumpkaboo-medium',
      'gourgeist-medium', 'pumpkaboo medium',
      'gourgeist medium', 'pumpkaboo-medium-variety',
      'gourgeist-medium-variety', 'pumpkaboo medium variety',
      'gourgeist medium variety', 'pumpkaboo-average-size',
      'gourgeist-average-size', 'pumpkaboo average size',
      'gourgeist average size',
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 2]);
    }
  });

  test('Large size', () => {
    const results = [
      {smogonName: 'pumpkaboo-large', pokeApiName: 'pumpkaboo-large'},
      {smogonName: 'gourgeist-large', pokeApiName: 'gourgeist-large'}
    ];
    const acceptedResponses: string[] = [
      'pumpkaboo-large', 'gourgeist-large', 'pumpkaboo large',
      'gourgeist large', 'pumpkaboo-large-variety',
      'gourgeist-large-variety', 'pumpkaboo large variety',
      'gourgeist large variety', 'pumpkaboo-large-size',
      'gourgeist-large-size', 'pumpkaboo large size',
      'gourgeist large size',
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 2]);
    }
  });

  test('Super size', () => {
    const results = [
      {smogonName: 'pumpkaboo-super', pokeApiName: 'pumpkaboo-super'},
      {smogonName: 'gourgeist-super', pokeApiName: 'gourgeist-super'}
    ];
    const acceptedResponses: string[] = [
      'pumpkaboo-super', 'gourgeist-super', 'pumpkaboo super',
      'gourgeist super', 'pumpkaboo-jumbo',
      'gourgeist-jumbo', 'pumpkaboo jumbo',
      'gourgeist jumbo', 'pumpkaboo-jumbo-variety',
      'gourgeist-jumbo-variety', 'pumpkaboo jumbo variety',
      'gourgeist jumbo variety', 'pumpkaboo-super-size',
      'gourgeist-super-size', 'pumpkaboo super size',
      'gourgeist super size',
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 2]);
    }
  });
});

describe('Zygarde test', () => {
  test('50% form', () => {
    const result = {smogonName: 'zygarde', pokeApiName: 'zygarde-50'};
    const acceptedResponses: string[] = [
      'zygarde-50', 'zygarde 50', 'zygarde-50%', 'zygarde 50%', 'zygarde'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('10% form', () => {
    const result = {smogonName: 'zygarde-10%', pokeApiName: 'zygarde-10'};
    const acceptedResponses: string[] = [
      'zygarde-10', 'zygarde 10', 'zygarde-10%', 'zygarde 10%',
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Lycanroc test', () => {
  test('Midday form', () => {
    const result = {smogonName: 'lycanroc', pokeApiName: 'lycanroc-midday'};
    const acceptedResponses: string[] = [
      'lycanroc', 'lycanroc-midday', 'lycanroc midday',
      'midday-lycanroc', 'midday lycanroc'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Midnight form', () => {
    const result = {smogonName: 'lycanroc-midnight', pokeApiName: 'lycanroc-midnight'};
    const acceptedResponses: string[] = [
      'lycanroc-midnight', 'lycanroc midnight', 'midnight-lycanroc', 'midnight lycanroc'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Dusk form', () => {
    const result = {smogonName: 'lycanroc-dusk', pokeApiName: 'lycanroc-dusk'};
    const acceptedResponses: string[] = [
      'lycanroc-dusk', 'lycanroc dusk', 'dusk-lycanroc', 'dusk lycanroc'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Urshifu test', () => {
  test('Single-Strike form', () => {
    const result = {smogonName: 'urshifu', pokeApiName: 'urshifu-single-strike'};
    const acceptedResponses: string[] = [
      'urshifu', 'urshifu-single', 'urshifu single', 'urshifu-single-strike',
      'urshifu single-strike', 'urshifu single strike'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Rapid-Strike form', () => {
    const result = {
      smogonName: 'urshifu-rapid-strike', pokeApiName: 'urshifu-rapid-strike'
    };
    const acceptedResponses: string[] = [
      'urshifu-rapid', 'urshifu rapid', 'urshifu-rapid-strike',
      'urshifu rapid-strike', 'urshifu rapid strike'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Nezcrozma Dawn and Dusk test', () => {
  test('Dawn-Wings form', () => {
    const result = {
      smogonName: 'necrozma-dawn-wings', pokeApiName: 'necrozma-dawn'
    };
    const acceptedResponses: string[] = [
      'necrozma-dawn-wings', 'necrozma dawn wings', 'necrozma dawn-wings',
      'necrozma-dawn', 'necrozma dawn', 'dawn-wings-necrozma',
      'dawn wings necrozma', 'dawn-wings necrozma', 'dawn-necrozma',
      'dawn necrozma'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Dusk-Mane form', () => {
    const result = {
      smogonName: 'necrozma-dusk-mane', pokeApiName: 'necrozma-dusk'
    };
    const acceptedResponses: string[] = [
      'necrozma-dusk-mane', 'necrozma dusk mane', 'necrozma dusk-mane',
      'necrozma-dusk', 'necrozma dusk', 'dusk-mane-necrozma',
      'dusk mane necrozma', 'dusk-mane necrozma', 'dusk-necrozma',
      'dusk necrozma'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Farfetch\'d test', () => {
  test('Regular form', () => {
    const result = {smogonName: 'farfetch\'d', pokeApiName: 'farfetchd'};
    const acceptedResponses: string[] = ['farfetchd', 'farfetch\'d'];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
  test('Galarian form', () => {
    const result = {
      smogonName: 'farfetch\'d-galar', pokeApiName: 'farfetchd-galar'
    };
    const acceptedResponses: string[] = [
      'farfetchd-galar', 'farfetch\'d-galar', 'farfetchd galar',
      'farfetch\'d galar', 'galarian-farfetchd', 'galarian-farfetch\'d',
      'galarian farfetchd', 'galarian farfetch\'d'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Mr. Mime test', () => {
  test('Regular form', () => {
    const result = {smogonName: 'mr. mime', pokeApiName: 'mr-mime'};
    const acceptedResponses: string[] = [
      'mr. mime', 'mr mime', 'mr.-mime', 'mr-mime'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
  test('Galarian form', () => {
    const result = {
      smogonName: 'mr. mime-galar', pokeApiName: 'mr-mime-galar'
    };
    const acceptedResponses: string[] = [
      'mr.-mime-galar', 'mr-mime-galar', 'mr. mime-galar', 'mr mime-galar',
      'mr. mime galar', 'mr mime galar', 'galarian-mr.-mime',
      'galarian-mr-mime', 'galarian-mr. mime', 'galarian-mr mime',
      'galarian mr. mime', 'galarian mr mime'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Regional variants test', () => {
  test('Alolan forms', () => {
    const result = {
      smogonName: 'muk-alola', pokeApiName: 'muk-alola'
    };
    const acceptedResponses: string[] = [
      'muk-alola', 'muk alola', 'alolan-muk', 'alolan muk'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Galarian forms', () => {
    const result = {
      smogonName: 'weezing-galar', pokeApiName: 'weezing-galar'
    };
    const acceptedResponses: string[] = [
      'weezing-galar', 'weezing galar',
      'galarian-weezing', 'galarian weezing'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Hisuian forms', () => {
    const result = {
      smogonName: 'samurott-hisui', pokeApiName: 'samurott-hisui'
    };
    const acceptedResponses: string[] = [
      'samurott-hisui', 'samurott hisui',
      'hisuian-samurott', 'hisuian samurott'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Paldean forms', () => {
    const result = {
      smogonName: 'wooper-paldea', pokeApiName: 'wooper-paldea'
    };
    const acceptedResponses: string[] = [
      'wooper-paldea', 'wooper paldea',
      'paldean-wooper', 'paldean wooper'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });
});

describe('Mega forms test', () => {
  test('Regular mega form', () => {
    const result = {
      smogonName: 'slowbro-mega', pokeApiName: 'slowbro-mega'
    };
    const acceptedResponses: string[] = [
      'mega-slowbro', 'mega slowbro', 'slowbro-mega', 'slowbro mega'
    ];
    for (const response of acceptedResponses) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Mega X forms', () => {
    const result = {
      smogonName: 'mewtwo-mega-x', pokeApiName: 'mewtwo-mega-x'
    };
    const acceptedResponse: string[] = [
      'mewtwo-mega-x', 'mewtwo mega-x', 'mewtwo mega x', 'mewtwo-mega x',
      'mega-mewtwo-x', 'mega mewtwo-x', 'mega mewtwo x', 'mega-mewtwo x'
    ];
    for (const response of acceptedResponse) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Mega Y forms', () => {
    const result = {
      smogonName: 'mewtwo-mega-y', pokeApiName: 'mewtwo-mega-y'
    };
    const acceptedResponse: string[] = [
      'mewtwo-mega-y', 'mewtwo mega-y', 'mewtwo mega y', 'mewtwo-mega y',
      'mega-mewtwo-y', 'mega mewtwo-y', 'mega mewtwo y', 'mega-mewtwo y'
    ];
    for (const response of acceptedResponse) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(result);
    }
  });

  test('Mega Z forms', () => {
    const resultNoZ = {
      smogonName: 'absol-mega', pokeApiName: 'absol-mega'
    };
    const acceptedResponseNoZ: string[] = [
      'mega-absol', 'mega absol', 'absol-mega', 'absol mega',
    ];
    for (const response of acceptedResponseNoZ) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(resultNoZ);
    }

    const resultZ = {
      smogonName: 'absol-mega-z', pokeApiName: 'absol-mega-z'
    };
    const acceptedResponseZ: string[] = [
      'absol-mega-z', 'absol mega-z', 'absol mega z', 'absol-mega z',
      'mega-absol-z', 'mega absol-z', 'mega absol z', 'mega-absol z'
    ];
    for (const response of acceptedResponseZ) {
      expect(convertToSmogonAndPokeApiName(response)).toStrictEqual(resultZ);
    }
  });
});

describe('Gender forms test', () => {
  test('Male', () => {
     const results = [
      {smogonName: 'meowstic', pokeApiName: 'meowstic-male'},
      {smogonName: 'indeedee', pokeApiName: 'indeedee-male'},
      {smogonName: 'basculegion', pokeApiName: 'basculegion-male'},
      {smogonName: 'oinkologne', pokeApiName: 'oinkologne-male'},
    ];
    const acceptedResponses: string[] = [
      'meowstic', 'indeedee', 'basculegion', 'oinkologne',
      'meowstic-m', 'indeedee-m', 'basculegion-m', 'oinkologne-m',
      'meowstic m', 'indeedee m', 'basculegion m', 'oinkologne m',
      'meowstic-male', 'indeedee-male', 'basculegion-male', 'oinkologne-male',
      'meowstic male', 'indeedee male', 'basculegion male', 'oinkologne male',
      'm-meowstic', 'm-indeedee', 'm-basculegion', 'm-oinkologne',
      'm meowstic', 'm indeedee', 'm basculegion', 'm oinkologne',
      'male-meowstic', 'male-indeedee', 'male-basculegion', 'male-oinkologne',
      'male meowstic', 'male indeedee', 'male basculegion', 'male oinkologne'
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 4]);
    }
  });

  test('Female', () => {
     const results = [
      {smogonName: 'meowstic-f', pokeApiName: 'meowstic-female'},
      {smogonName: 'indeedee-f', pokeApiName: 'indeedee-female'},
      {smogonName: 'basculegion-f', pokeApiName: 'basculegion-female'},
      {smogonName: 'oinkologne-f', pokeApiName: 'oinkologne-female'},
    ];
    const acceptedResponses: string[] = [
      'meowstic-f', 'indeedee-f', 'basculegion-f', 'oinkologne-f',
      'meowstic f', 'indeedee f', 'basculegion f', 'oinkologne f',
      'meowstic-female', 'indeedee-female', 'basculegion-female', 'oinkologne-female',
      'meowstic female', 'indeedee female', 'basculegion female', 'oinkologne female',
      'f-meowstic', 'f-indeedee', 'f-basculegion', 'f-oinkologne',
      'f meowstic', 'f indeedee', 'f basculegion', 'f oinkologne',
      'female-meowstic', 'female-indeedee', 'female-basculegion', 'female-oinkologne',
      'female meowstic', 'female indeedee', 'female basculegion', 'female oinkologne'
    ];
    for (let i = 0; i < acceptedResponses.length; i++) {
      expect(convertToSmogonAndPokeApiName(
        acceptedResponses[i]
      )).toStrictEqual(results[i % 4]);
    }
  });
});

describe('convertToSmogonSpriteName tests', () => {
  test('Removes spaces from the name', () => {
    expect(convertToSmogonSpriteName('great tusk')).toStrictEqual('greattusk');
  });

  test('Removes "\'" from the name', () => {
    expect(convertToSmogonSpriteName('farfetch\'d')).toStrictEqual('farfetchd');
  });

  test('Removes "." from the name', () => {
    expect(convertToSmogonSpriteName('mr. mime')).toStrictEqual('mrmime');
  });

  test('Removes ":" from the name', () => {
    expect(convertToSmogonSpriteName('type: null')).toStrictEqual('typenull');
  });

  test('Removes "%" from the name', () => {
    expect(convertToSmogonSpriteName('zygarde-10%')).toStrictEqual('zygarde-10');
  });

  test('Adds -teal to regular Ogerpon only', () => {
    expect(convertToSmogonSpriteName('ogerpon')).toStrictEqual('ogerpon-teal');
    expect(convertToSmogonSpriteName(
      'ogerpon-wellspring'
    )).toStrictEqual('ogerpon-wellspring');
  });

  test('Adds -terastal to regular terapagos', () => {
    expect(convertToSmogonSpriteName('terapagos')).toStrictEqual('terapagos-terastal');
  });

  test('Removes hyphens for certain Pokemon', () => {
    const results = [
      'oricorio-pompom', 'tauros-paldeacombat', 'tauros-paldeablaze',
      'tauros-paldeaaqua', 'hooh', 'charizard-megax', 'raichu-megay',
      'absol-megaz', 'necrozma-duskmane', 'necrozma-dawnwings', 'porygonz'
    ];
    const responses: string[] = [
      'oricorio-pom-pom', 'tauros-paldea-combat', 'tauros-paldea-blaze',
      'tauros-paldea-aqua', 'ho-oh', 'charizard-mega-x', 'raichu-mega-y',
      'absol-mega-z', 'necrozma-dusk-mane', 'necrozma-dawn-wings', 'porygon-z'
    ];
    for (let i = 0; i < responses.length; i++) {
      expect(convertToSmogonSpriteName(
        responses[i]
      )).toStrictEqual(results[i]);
    }
  });
});
