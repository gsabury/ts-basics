// example 1

// Signature
let greet: (a: string, b: string) => void;

// Function
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

greet("Abdul Ghafor Sabury", "Hello");
greet("John Doe", "Good Bye");

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

console.log(calc(4, 5, 'add'));
console.log(calc(40, 5, 'minus'));

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetails({name:"Ali", age: 30});
logDetails({name:"Fatema", age: 21});