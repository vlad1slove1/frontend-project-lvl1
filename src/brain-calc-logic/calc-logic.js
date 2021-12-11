import basement from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

let getRandomOperation;
const showEquation = (number1, operator, number2) => {
  if (operator === '+') {
    getRandomOperation = `${number1 + number2}`;
  }
  if (operator === '-') {
    getRandomOperation = `${number1 - number2}`;
  }
  if (operator === '*') {
    getRandomOperation = `${number1 * number2}`;
  }
  return getRandomOperation;
};

const gameCheck = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const getRandomOperator = operations[Math.floor(Math.random() * operations.length)];
  const getQuestion = `${number1} ${getRandomOperator} ${number2}`;
  const checkAnswer = showEquation(number1, getRandomOperator, number2);
  return [getQuestion, checkAnswer];
};

const calculateIt = () => basement(gameRules, gameCheck);

export default calculateIt;
