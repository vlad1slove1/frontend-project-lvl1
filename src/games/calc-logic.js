import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const equation = (number1, operator, number2) => {
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
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = `${equation(number1, randomOperator, number2)}`;
  return [question, correctAnswer];
};

const calculateIt = () => engine(gameRules, gameCheck);

export default calculateIt;
