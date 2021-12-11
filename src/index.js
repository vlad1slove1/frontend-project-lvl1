import readlineSync from 'readline-sync';

const basement = (gameRules, gameCheck) => {
  const rounds = 3;
  // edit rounds count

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 1; i <= rounds; i += 1) {
    const [getQuestion, checkAnswer] = gameCheck();
    console.log(`Question: ${getQuestion}`);
    const askAnswer = readlineSync.question('Your answer: ');

    if (askAnswer === checkAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${checkAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default basement;
