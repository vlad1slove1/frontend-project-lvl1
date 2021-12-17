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
  const getRandomProgressionLength = getRandomNumber(5, 10);

  const getProgression = getMassive(firstNumber, step, getRandomProgressionLength);

  const getRandomIndexOfMassive = getProgression[getRandomNumber(0, getProgression.length - 1)];
  const numberToString = `${getRandomIndexOfMassive}`;

  const hideIndex = getProgression.indexOf(getRandomIndexOfMassive);
  getProgression[hideIndex] = '..';
  const str = getProgression.join(' ');

  const getQuestion = `${str}`;
  const checkAnswer = numberToString;
  return [getQuestion, checkAnswer];
};

const getProgression = () => basement(gameRules, gameCheck);

export default getProgression;
