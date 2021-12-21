import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primality = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const checkAnswer = primality(number) ? 'yes' : 'no';
  return [question, checkAnswer];
};

const checkForPrimality = () => basement(gameRules, gameCheck);

export default checkForPrimality;
