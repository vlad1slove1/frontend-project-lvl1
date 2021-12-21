import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
};

const gameCheck = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const checkAnswer = `${greatestCommonDivisor(number1, number2)}`;
  return [question, checkAnswer];
};

const getGCD = () => basement(gameRules, gameCheck);

export default getGCD;
