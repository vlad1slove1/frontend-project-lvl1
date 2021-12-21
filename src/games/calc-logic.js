import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const showEquation = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const gameCheck = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const randomOperator = operations[getRandomNumber(0, operations.length - 1)];
  const guestion = `${number1} ${randomOperator} ${number2}`;
  const checkAnswer = `${showEquation(number1, randomOperator, number2)}`;
  return [guestion, checkAnswer];
};

const calculateIt = () => basement(gameRules, gameCheck);

export default calculateIt;
