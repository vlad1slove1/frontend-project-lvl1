import readlineSync from 'readline-sync';

const checkEven = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
    }
  }

  if (number % 2 !== 0 || number === 1) {
    if (askAnswer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was 'no'`);
      console.log(`Let's try again, ${userName}`);
    }
  }
};

export default checkEven;
