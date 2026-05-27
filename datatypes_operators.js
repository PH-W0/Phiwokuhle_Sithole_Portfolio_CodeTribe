let intergerNum = 10;
let floatNum = 3.4;

let addition = integerNum + floatNum;
let subtraction = integerNum - floatNum;
let multiplication = integerNum * floatNum;
let division = integerNum / floatNum;
let modulus = integerNum % 2;
let exponentiation = integerNum ** 2;


console.log(`Integer: ${integerNum}, Float: ${floatNum}`);
console.log(`Addition (${integerNum} + ${floatNum}) = ${addition}`);
console.log(`Subtraction (${integerNum} - ${floatNum}) = ${subtraction}`); 
console.log(`Multiplication (${integerNum} * ${floatNum}) = ${multiplication}`);
console.log(`Division (${integerNum} / ${floatNum}) = ${division}`);
console.log(`Modulus (${integerNum} % 2) = ${modulus}`);
console.log(`Exponentiation (${integerNum} ** 2) = ${exponentiation}`); 
console.log("\n");

// Excersize 2

let num1 = 15;
let num2 = 10;

let isGreater = num1 > num2;
let isLess = num1 < num2;
let isEqual = num1 === num2;
let isEqual = num1 === num2;

console.log(`num1 = ${num1}, num2 = ${num2}`);
console.log(`Is num1 greater than num2? ${isGreater}`);
console.log(`Is num1 less than num2? ${isLess}`);
console.log(`Is num1 equal to num2? ${isEqual}`);
console.log("\n");

// Excersize 3

let x = 8;
let y = 5;


console.log(`x = ${x}, y = ${y}`);

console.log(`Is x greater than y? ${x > y}`);
console.log(`Is x less than or equal to y? ${x <= y}`);
console.log(`Is x equal to y? ${x === y}`);
console.log(`Is x not equal to y? ${x !== y}`);
console.log("\n");

// Exercise 4

let a = 10;
let originalA = 10;

console.log(`Original a: ${originalA}`);

a = originalA;
a += 5;
console.log(`a += 5: ${a}`);

a = originalA;
a -= 3;
console.log(`a -= 3: ${a}`);

a = originalA;
a *= 2;
console.log(`a *= 2: ${a}`);

a = originalA;
a /= 4;
console.log(`a /= 4: ${a}`);
