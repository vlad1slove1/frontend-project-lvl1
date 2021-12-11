import readlineSync from 'readline-sync';
import userName from '../greetings.js';
import getRandomNumber from '../getRandomNumber.js';

const rounds = 3;
// edit rounds counts

console.log('What number is missing in the progression?');
// pronounce the rules

const getProgression = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const step = getRandomNumber(2, 10);
    const getRandomProgressionLength = getRandomNumber(5, 10);

    let result;
    const massive = [firstNumber];
    for (let j = 1; j <= getRandomProgressionLength; j += 1) {
      result = firstNumber + (j * step);
      massive.push(result);
    }

    const getRandomIndexOfMassive = massive[Math.floor(Math.random() * massive.length)];
    const numberToString = getRandomIndexOfMassive.toString();

    const hideIndex = massive.indexOf(getRandomIndexOfMassive);
    massive[hideIndex] = '..';
    const str = massive.join(' ');

    console.log(`Question: ${str}`);
    const askAnswer = readlineSync.question('Your answer: ');

    if (askAnswer === numberToString) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${getRandomIndexOfMassive}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getProgression;
