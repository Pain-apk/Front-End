/**
 * General Functions, Conditional Statements, and Loops in JavaScript
 */

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Using Functions
console.log(greet("Alice")); // Hello, Alice!
console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20

// Conditional Statements
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));  // Positive
console.log(checkNumber(-5));  // Negative
console.log(checkNumber(0));   // Zero

// Loops

// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(`For Loop iteration: ${i}`);
}

// While Loop
let count = 1;
while (count <= 3) {
    console.log(`While Loop count: ${count}`);
    count++;
}

// For...of Loop (Array iteration)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// Example: Using functions, conditionals, and loops together
function printEvenNumbers(arr) {
    for (const num of arr) {
        if (num % 2 === 0) {
            console.log(`Even number: ${num}`);
        }
    }
}

printEvenNumbers([1, 2, 3, 4, 5, 6]);
const arrowfunction = () => {
    console.log("I am an arrow function");

}
arrowfunction();
// Example: Using functions, conditionals, and loops together
