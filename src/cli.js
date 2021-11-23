import readlineSync from 'readline-sync';

const welcome = console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
const greetings = console.log(`Hello, + ${userName}!`);

const logic = welcome + userName + greetings;
export default logic;
