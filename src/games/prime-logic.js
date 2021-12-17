import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primality = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const getQuestion = `${number}`;
  const checkAnswer = primality(number) ? 'yes' : 'no';
  return [getQuestion, checkAnswer];
};

const checkForPrimality = () => basement(gameRules, gameCheck);

export default checkForPrimality;
