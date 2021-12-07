import readlineSync from 'readline-sync';
import { userName, getRandomNumber } from './index.js';

const rounds = 3;

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const checkForPrimality = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const getNumber = getRandomNumber(1, 100);
    // console.log(getNumber);

    console.log(`Question: ${getNumber}`);

    const primality = () => {
      for (let j = 2; j < getNumber; j += 1) {
        if (getNumber % j === 0) return false;
      }
      return getNumber > 1;
    };
    // console.log(primality());

    const askAnswer = readlineSync.question('Your answer: ');

    if (primality() === true) {
      if (askAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
    if (primality() === false) {
      if (askAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was 'no'`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default checkForPrimality;
