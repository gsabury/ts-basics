"use strict";
// example 1
// Signature
let greet;
// Function
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet("Abdul Ghafor Sabury", "Hello");
greet("John Doe", "Good Bye");
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(4, 5, 'add'));
console.log(calc(40, 5, 'minus'));
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetails({ name: "Ali", age: 30 });
logDetails({ name: "Fatema", age: 21 });
