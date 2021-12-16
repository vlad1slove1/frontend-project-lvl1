import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import primality from '../checkForPrimality.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  if (primality(number)) {
    return 'yes';
  }
  return 'no';
};

const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const getQuestion = `${number}`;
  const checkAnswer = isNumberPrime(number);
  return [getQuestion, checkAnswer];
};

const checkForPrimality = () => basement(gameRules, gameCheck);

export default checkForPrimality;
