import readlineSync from 'readline-sync';
import { userName, getRandomNumber } from './index.js';

const rounds = 3; // Задаём количество раундов

console.log('Find the greatest common divisor of given numbers.');

const getGCD = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);

    const showEquation = `${number1} ${number2}`;
    console.log(`Question: ${showEquation}`);

    const askAnswer = readlineSync.question('Your answer: ');

    const greatestCommonDivisor = (num1, num2) => {
      let a = num1;
      let b = num2;
      if (a % b === 0) {
        return b;
      }
      while (b !== 0) {
        if (a > b) {
          a -= b;
        } else {
          b -= a;
        }
      }
      return a;
    };

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
