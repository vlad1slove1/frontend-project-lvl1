import basement from './index.js';
import getRandomNumber from './getRandomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const getQuestion = `${number}`;
  const checkAnswer = isNumberEven(number);
  return [getQuestion, checkAnswer];
};

const checkEven = () => basement(gameRules, gameCheck);

export default checkEven;
