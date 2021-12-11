import readlineSync from 'readline-sync';
import userName from '../greetings.js';
import getRandomNumber from '../getRandomNumber.js';
import primality from './checkForPrimality.js';

const rounds = 3;
// edit rounds counts

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
// pronounce the rules

const checkForPrimality = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const getNumber = getRandomNumber(1, 100);

    console.log(`Question: ${getNumber}`);

    const checkPrimality = primality(getNumber);

    const askAnswer = readlineSync.question('Your answer: ');

    if (checkPrimality === true) {
      if (askAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
    if (checkPrimality === false) {
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
