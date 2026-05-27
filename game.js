const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

console.log("Welcome to MasterMind your best number guessing game");
console.log ("My name is PH!!WO")
console.log("I have selected a number between 1 and 100. Can you guess it?");

 function askNumber() {

  if (attempts === 0){
    console.log(`You are out of attempts, The number was: ${secretNumber}`)
    rl.close();
    return;
  }
  rl.question("Enter your guess: ", (answer) => {
    const guess = parseInt(answer);
    attempts--;
    if (guess === secretNumber) {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts. :()`);
      rl.close();
    } else {
      console.log("Too low! Try again.");
      console.log(`you have ${attempts} left`);
      askNumber();
    }
  });
}

askNumber();

