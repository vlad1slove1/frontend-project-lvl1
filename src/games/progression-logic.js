import basement from './index.js';
import getRandomNumber from './getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const gameCheck = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 10);
  const getRandomProgressionLength = getRandomNumber(5, 10);

  let result;
  const massive = [firstNumber];
  for (let i = 1; i <= getRandomProgressionLength; i += 1) {
    result = firstNumber + (i * step);
    massive.push(result);
  }

  const getRandomIndexOfMassive = massive[Math.floor(Math.random() * massive.length)];
  const numberToString = getRandomIndexOfMassive.toString();

  const hideIndex = massive.indexOf(getRandomIndexOfMassive);
  massive[hideIndex] = '..';
  const str = massive.join(' ');

  const getQuestion = `${str}`;
  const checkAnswer = numberToString;
  return [getQuestion, checkAnswer];
};

const getProgression = () => basement(gameRules, gameCheck);

export default getProgression;
