let temperature = 22;

console.log(`Temperature: ${temperature}°C`);

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}
console.log("\n");


let number = 12;
console.log(`Number: ${number}`);

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}


let divisibleBy2 = number % 2 === 0;
let divisibleBy3 = number % 3 === 0;

switch (true) {
    case (divisibleBy2 && divisibleBy3):
        console.log("Divisible by both.");
        break;
    case (divisibleBy2):
        console.log("Divisible by 2.");
        break;
    case (divisibleBy3):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}
console.log("\n");


// Exercise 3 loops

console.log("\n1. Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n2. Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\n3. Sum of numbers 1 to 100:");
let sumFor = 0;
for (let i = 1; i <= 100; i++) {
    sumFor += i;
}
console.log(`Sum = ${sumFor}`);


console.log("\n4. Print each element of array:");
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(`Element at index ${i}: ${numbers1[i]}`);
}

console.log("\n5. Find the largest number:");
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log(`Array: [${numbers2}]`);
console.log(`Largest number: ${largest}`);
console.log("\n");

//exercise 4

console.log("\n1. While loop - numbers 1 to 10:");

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


console.log("\n2. Even numbers between 1 and 20:");
i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}


console.log("\n3. Sum of numbers 1 to 100:");
let sumWhile = 0;
let j = 1;
while (j <= 100) {
    sumWhile += j;
    j++;
}
console.log(`Sum = ${sumWhile}`);

console.log("\n4. Multiples of 5 less than 50:");
let k = 5;
while (k < 50) {
    console.log(k);
    k += 5;
}
console.log("\n");


console.log("\n1. Numbers 1 to 10:");
let m = 1;
do {
    console.log(m);
    m++;
} while (m <= 10);

console.log("\n2. Sum of numbers 1 to 100:");
let sumDoWhile = 0;
let n = 1;
do {
    sumDoWhile += n;
    n++;
} while (n <= 100);
console.log(`Sum = ${sumDoWhile}`);

console.log("\n3. Number > 10 prompt (simulated):");
console.log("Note: This requires a browser environment with prompt()");
console.log("Simulated result: User entered 15 → Valid number");


//The number guessing game.

function getUserNumber() {
    let userInput = 15;
    while (userInput <= 10) {
        userInput = 15;
    }
    console.log(`valid number entered: ${userInput}`);
}
getUserNumber();

console.log("\n4. Guessing Game (simulated):");
console.log("Guess a number between 1 and 10");

let secretNumber = 7;
let guess = 5; 
let attempts = 1

do {
    if (guess === secretNumber) {
        console.log(`Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempt(s)!`);
        break;
    } else if (guess < secretNumber) {
        console.log(`Guess ${attempts}: ${guess} - Too low!`);
    } else {
        console.log(`Guess ${attempts}: ${guess} - Too high!`);
    }
    attempts++;
    guess = 7; 
}while (guess !== secretNumber);

if (guess === secretNumber) {
    console.log(`Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempt(s)!`);
} 
console.log("\n");