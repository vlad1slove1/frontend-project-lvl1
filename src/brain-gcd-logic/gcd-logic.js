import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import greatestCommonDivisor from './getGCD.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gameCheck = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const getQuestion = `${number1} ${number2}`;
  const checkAnswer = String(greatestCommonDivisor(number1, number2));
  return [getQuestion, checkAnswer];
};

const getGCD = () => basement(gameRules, gameCheck);

export default getGCD;
