import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (progressionStart, progressionStep, progressionLength) => {
  const massive = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const result = progressionStart + (i * progressionStep);
    massive.push(result);
  }
  return massive;
};

const gameCheck = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 10);
  const randomLength = getRandomNumber(5, 10);

  const progression = generateProgression(firstNumber, step, randomLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progressionGame = () => engine(gameRules, gameCheck);

export default progressionGame;
