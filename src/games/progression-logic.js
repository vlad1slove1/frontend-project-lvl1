import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const getMassive = (progressionStart, progressionStep, progressionLength) => {
  const massive = [];
  let result;
  for (let i = 0; i <= progressionLength; i += 1) {
    result = progressionStart + (i * progressionStep);
    massive.push(result);
  }
  return massive;
};

const gameCheck = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 10);
  const randomProgressionLength = getRandomNumber(5, 10);

  const progression = getMassive(firstNumber, step, randomProgressionLength);

  const randomIndexOfMassive = progression[getRandomNumber(0, progression.length - 1)];

  const hideIndex = progression.indexOf(randomIndexOfMassive);
  progression[hideIndex] = '..';
  const str = progression.join(' ');

  return [str, `${randomIndexOfMassive}`];
};

const getProgression = () => basement(gameRules, gameCheck);

export default getProgression;
