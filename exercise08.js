// Write a program that chooses a random number between 1 and 100 and allows
// the user to try to guess the number, giving hints of "higher" or "lower" until the user guesses correctly.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const guessTheNumber = () => {
  const randomValue = Math.floor(Math.random() * 101);

  const askQuestion = () => {
    rl.question('Digit a number from 0 to 100: ', (num) => {
      num = +num; 
      if (num === randomValue) {
        console.log('Congrats, you found the number!');
        rl.close();
      } else if (num < randomValue) {
        console.log('Try again, the number is higher');
        askQuestion(); 
      } else {
        console.log('Try again, the number is lower');
        askQuestion(); 
      }
    });
  };

  askQuestion(); 
}

guessTheNumber(); 
