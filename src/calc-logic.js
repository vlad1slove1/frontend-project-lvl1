import readlineSync from 'readline-sync';
import { userName, getRandomNumber } from './index.js';

const rounds = 3;
// edit rounds count

console.log('What is the result of the expression?');
// Pronounce the rules

const calculateIt = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const operations = ['+', '-', '*'];
    const getRandomOperator = operations[Math.floor(Math.random() * operations.length)];

    const number1 = getRandomNumber(1, 25);
    const number2 = getRandomNumber(1, 25);

    let getRandomOperation;

    const showEquation = `${number1} ${getRandomOperator} ${number2}`;
    console.log(`Question: ${showEquation}`);

    const askAnswer = readlineSync.question('Your answer: ');

    if (getRandomOperator === '+') {
      getRandomOperation = `${number1 + number2}`;
    }
    if (getRandomOperator === '-') {
      getRandomOperation = `${number1 - number2}`;
    }
    if (getRandomOperator === '*') {
      getRandomOperation = `${number1 * number2}`;
    }

    if (askAnswer === getRandomOperation) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${getRandomOperation}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calculateIt;
