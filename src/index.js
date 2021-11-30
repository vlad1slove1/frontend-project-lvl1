import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// Start
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
// Greetings

export default userName;
