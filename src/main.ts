import { fetchLatestTierData, fetchPokemonInTier, fetchSprite } from './api.js';
import { getPokemonGuessData } from './dataCollector.js';
import { Correctness, FullTierData, GuessResult, PokemonGuessData } from './dataStore.js';
import { comparePokemon } from './guess.js';
import { titleCase } from 'title-case';

let tierData: FullTierData | null = null;
let pokemonInTier: string[] = [];
let targetData: PokemonGuessData;
let guessCount = 0;

const gameStart = document.getElementById('gameStart') as HTMLButtonElement;
const formatSelection = document.getElementById('format') as HTMLSelectElement;
const guessBox = document.getElementById('guessBox') as HTMLInputElement;
const guessSubmitBtn = document.getElementById('guessSubmitButton') as HTMLButtonElement;
const guessContainer = document.getElementById('guessContainer') as HTMLDivElement;
const formatSelectMenu = document.getElementById('formatSelectMenu') as HTMLDivElement;
const guessWrapper = document.getElementById('guessWrapper') as HTMLDivElement;
const invalidPokemonErrorMessage = document.getElementById('invalidError') as HTMLSpanElement;
const instructButton = document.getElementById('instructButton') as HTMLButtonElement;
const clarifyButton = document.getElementById('clarifyButton') as HTMLButtonElement;
const creditButton = document.getElementById('creditButton') as HTMLButtonElement;

/**
 * Creates a box for a boolean (yes/no) guess result.
 * The box size depends on the className and contains
 * the guess and a colour.
 * Green if guessResult = true.
 * White if not.
 * If a label string is provided, adds a label to
 * the box of the given string.
 * 
 * @param {string} guess 
 * @param {boolean} guessResult 
 * @param {string} className 
 * @param {string} label
 * @returns {HTMLDivElement}
 */
function createBooleanResultBox(
  guess: string, guessResult: boolean,
  className: string, label?: string
): HTMLDivElement {
  const box = document.createElement('div');
  box.className = className;
  box.innerHTML = guess;

  if (guessResult) {
    box.style.backgroundColor = '#acd8a7';
  } else {
    box.style.backgroundColor = '#ffffffff';
  }

  if (label) {
    box.innerHTML = label + '<br>' + box.innerHTML;
  }

  return box;
}

/**
 * Creates a box for a number guess result.
 * The box size depends on the className and contains
 * the guess and a colour.
 * Green if guessResult === 0.
 * Yellow if abs(guessResult) <= offset.
 * White if not.
 * 
 * If the guessResult < 0, adds a ↑ to the text.
 * If the guessResult > 0, adds a ↓ to the text.
 * 
 * If a label string is provided, adds a label to
 * the box of the given string.
 * 
 * @param {number} guess 
 * @param {number} guessResult 
 * @param {number} offset
 * @param {string} className 
 * @param {string} label
 * @returns {HTMLDivElement}
 */
function createNumberResultBox(
  guess: number, guessResult: number, offset: number,
  className: string, label?: string
): HTMLDivElement {
  const box = document.createElement('div');
  box.className = className;
  box.innerHTML = `${guess}`;
  
  if (guessResult > 0) {
    box.textContent += '⬇';
  } else if (guessResult < 0) {
    box.textContent += '⬆';
  }

  if (guessResult === 0) {
    box.style.backgroundColor = '#acd8a7';
  } else if (Math.abs(guessResult) <= offset) {
    box.style.backgroundColor = '#fde992';
  } else {
    box.style.backgroundColor = '#ffffffff';
  }

  if (label) {
    box.innerHTML = label + '<br>' + box.innerHTML;
  }

  return box;
}

/**
 * Creates a box for a correctness guess result.
 * The box size depends on the className and contains
 * the guess and a colour.
 * Green if guessResult === 0.
 * Yellow if abs(guessResult) <= offset.
 * White if not.
 * 
 * If a label string is provided, adds a label to
 * the box of the given string.
 * 
 * @param {string} guess 
 * @param {Correctness} guessResult
 * @param {string} className 
 * @param {string} label
 * @returns {HTMLDivElement}
 */
function createCorrectnessResultBox(
  guess: string, guessResult: Correctness,
  className: string, label?: string
): HTMLDivElement {
  const box = document.createElement('div');
  box.className = className;
  box.innerHTML = guess;

  if (guessResult === Correctness.TRUE) {
    box.style.backgroundColor = '#acd8a7';
  } else if (guessResult === Correctness.PARTIAL) {
    box.style.backgroundColor = '#fde992';
  } else {
    box.style.backgroundColor = '#ffffffff';
  }

  if (label) {
    box.innerHTML = label + '<br>' + box.innerHTML;
  }

  return box;
}

/**
 * Creates and returns the box containing the data
 * displayed to a user after they have made a guess.
 * 
 * @returns {HTMLDivElement}
 */
async function createGuessCard(
  guess: PokemonGuessData, guessResult: GuessResult
): Promise<HTMLDivElement> {
  const card = document.createElement('div');
  card.className = 'guesscard';

  // Left - Pokemon sprite
  const left = document.createElement('div');
  left.className = 'col left';

  const sprite = document.createElement('img');
  try {
    sprite.src = URL.createObjectURL(await fetchSprite(guess.name));
    left.appendChild(sprite);
  } catch (error) {
    console.log(error);
  }

  // Middle - Name and usage
  const middle = document.createElement('div');
  middle.className = 'col middle'

  middle.appendChild(createBooleanResultBox(
    guess.name, guessResult.name, 'box small', 'Pokémon:'
  ));
  middle.appendChild(createNumberResultBox(
    parseFloat((guess.usage * 100).toFixed(2)),
    guessResult.usage, 0.025, 'box large', 'Usage (%):'
  ));

  // Right - types, bst and highest stat
  const right = document.createElement('div');
  right.className = 'col right'

  const typeRow = document.createElement('div');
  typeRow.className = 'row';

  typeRow.appendChild(createCorrectnessResultBox(
    titleCase(guess.types[0]), guessResult.type1, 'box small half'
  ));
  typeRow.appendChild(createCorrectnessResultBox(
    titleCase(guess.types[1]), guessResult.type2, 'box small half'
  ));
  right.appendChild(typeRow);

  right.appendChild(createNumberResultBox(
    guess.bst, guessResult.bst, 25, 'box small', 'Base Stat Total:'
  ));

  right.appendChild(createBooleanResultBox(
    guess.highestStat, guessResult.highestStat,
    'box small', 'Highest Stat:'
  ));

  card.appendChild(left);
  card.appendChild(middle);
  card.appendChild(right);
  return card;
}

/**
 * Searches text folder for a .txt file with the given name
 * and returns it as a string.
 * Throws an error if it cannot find the file.
 * 
 * @param {string} fileName 
 * @returns {Promise<string>}
 * @throws {Error}
 */
async function fetchTextFile(fileName: string): Promise<string> {
  const response = await fetch(`/text/${fileName}.txt`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${fileName}.txt`);
  }

  const text: string = await response.text();
  return text;
}

/**
 * Creates a popup with the given innerHTML.
 *
 * @param {string} innerHTML
 */
async function createPopup(innerHTML: string) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay'; 
  overlay.id = 'overlayPopup';

  const popup = document.createElement('div');
  popup.className = 'popup';
  overlay.appendChild(popup);

  const popupText = document.createElement('p');
  popupText.innerHTML = innerHTML;
  popup.appendChild(popupText);

  const closeButton = document.createElement('button');
  closeButton.className = 'big button';
  closeButton.innerHTML = 'Close';
  closeButton.id = 'popupCloseButton';
  closeButton.addEventListener('click', () => {
    overlay.remove();
  });
  popup.appendChild(closeButton);

  document.body.appendChild(overlay);
}

/**
 * Creates a popup to display information like instructions,
 * clarifications or credits from the text in a.
 * Searches the text folder for the .txt file with name fileName.
 * If it is found, creates a popup.
 * If not, displays the error to the console.
 *
 * @param {string} fileName
 */
async function createInfoPopup(fileName: string) {
  try {
    const text: string = await fetchTextFile(fileName);
    createPopup(text);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Creates the popup for when a Pokemon is correctly guessed.
 */
async function createVictoryPopup() {
  let text: string = '<strong>Congragulations!</strong>';
  text += '<br> <br>';
  text += `You got ${targetData.name} in ${guessCount} guesses.`
  createPopup(text);
}

/**
 * When the Generate! button is clicked to start the game.
 * Tries to get the latest tier data and Pokemon currently
 * in the tier.
 * If either of those fails, returns.
 * 
 * If neither fail, picks a random Pokemon from the
 * Pokemon in the tier to be the target, gets the data
 * and stores it as targetData, removes the menu with format
 * selection and shows the guess menu.
 */
gameStart.addEventListener('click', async () => {
  gameStart.disabled = true;
  formatSelection.disabled = true;
  const originalHTML = gameStart.innerHTML;
  gameStart.innerHTML = 'Generating...';

  const format: string = formatSelection.value;
  const gen: number = parseInt(format[0]);
  const tier: string = format.slice(1);

  // console.log('Trying fetchLatestTierData'); //
  try {
    tierData = await fetchLatestTierData(gen, tier);
  } catch (err) {
    console.log(`Error: ${err.message}.`);
    gameStart.disabled = false;
    formatSelection.disabled = false;
    gameStart.innerHTML = originalHTML;
    return;
  }
  // console.log(new Blob([JSON.stringify(tierData)]).size); //
  // console.log(tierData); //
  // console.log('Trying fetchPokemonInTier'); //

  try {
    pokemonInTier = await fetchPokemonInTier(gen, tier, tierData);
  } catch (err) {
    console.log(`Error: ${err.message}.`);
    gameStart.disabled = false;
    formatSelection.disabled = false;
    gameStart.innerHTML = originalHTML;
    return;
  }
  // console.log(pokemonInTier); //

  const targetName: string = pokemonInTier[
    Math.floor(Math.random() * pokemonInTier.length)
  ];
  try {
    targetData = await getPokemonGuessData(tierData, targetName);
  } catch (err) {
    console.log(`Error: ${err.message}.`);
    gameStart.disabled = false;
    formatSelection.disabled = false;
    gameStart.innerHTML = originalHTML;
    return;
  }
  // console.log(target) //

  gameStart.disabled = false;
  gameStart.innerHTML = originalHTML;
  formatSelectMenu.remove();
  guessWrapper.style.display = 'block';
});

/**
 * When the user wants to submit a guess.
 * 
 * Checks the gussBox for the inputted string and
 * compares it with the target data.
 * 
 * If the Pokemon does not exist, shows the
 * invalidError message until the next guess.
 * 
 * If it does exist, compares the guessed Pokemon
 * with the target and adds the result of the comparison
 * to the guessBox.
 */
guessSubmitBtn.addEventListener('click', async () => {
  guessSubmitBtn.disabled = true;
  guessBox.disabled = true;
  invalidPokemonErrorMessage.style.display = 'none';

  const guessName = guessBox.value;
  // console.log('User input:', guessName); //

  if (!targetData) {
    guessSubmitBtn.disabled = false;
    guessBox.disabled = false;
    return;
  }

  let guessData: PokemonGuessData = null;
  try {
    guessData = await getPokemonGuessData(tierData, guessName);
    // console.log(guessData); //

    guessCount++

    const guessResult: GuessResult = comparePokemon(targetData, guessData);
    guessContainer.style.display = 'inline';
    guessContainer.prepend(await createGuessCard(guessData, guessResult));

    if (guessResult.name === true) {
      createVictoryPopup();
      guessSubmitBtn.disabled = true;
      guessBox.disabled = true;
      return;
    }
  } catch (err) {
    invalidPokemonErrorMessage.style.display = 'inline';
    console.log(`Error: ${err.message}.`);
  }

  guessSubmitBtn.disabled = false;
  guessBox.disabled = false;
});

/**
 * Clicks submit button if enter key was pressed in the guessBox
 */
guessBox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    guessSubmitBtn.click();
  }
});

instructButton.addEventListener('click', async () => {
  createInfoPopup('instruction');
});

clarifyButton.addEventListener('click', async () => {
  createInfoPopup('clarification');
});

creditButton.addEventListener('click', async () => {
  createInfoPopup('credits');
});
