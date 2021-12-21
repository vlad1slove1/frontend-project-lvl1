import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const checkAnswer = isNumberEven(number) ? 'yes' : 'no';
  return [question, checkAnswer];
};

const checkEven = () => basement(gameRules, gameCheck);

export default checkEven;
