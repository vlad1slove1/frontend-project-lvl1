import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
};

const gameCheck = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${calculateGCD(number1, number2)}`;
  return [question, correctAnswer];
};

const gcdGame = () => engine(gameRules, gameCheck);

export default gcdGame;
