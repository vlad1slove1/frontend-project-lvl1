import readlineSync from 'readline-sync';
import userName from './index.js';

const rounds = 3;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
// Pronounce the rules

const checkEven = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);

    const askAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (askAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }

    if (number % 2 !== 0) {
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

export default checkEven;
