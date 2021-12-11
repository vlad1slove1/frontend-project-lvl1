import readlineSync from 'readline-sync';
import userName from '../greetings.js';
import getRandomNumber from '../getRandomNumber.js';
import greatestCommonDivisor from './getGCD.js';

const rounds = 3;
// edit rounds counts

console.log('Find the greatest common divisor of given numbers.');
// pronounce the rules

const getGCD = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);

    const showEquation = `${number1} ${number2}`;
    console.log(`Question: ${showEquation}`);

    const askAnswer = readlineSync.question('Your answer: ');

    const result = String(greatestCommonDivisor(number1, number2));

    if (askAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getGCD;
