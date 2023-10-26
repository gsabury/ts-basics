"use strict";
// var anchor = document.querySelector('a') as HTMLAnchorElement;
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
import { Invoice } from "./classes/Invoice.js";
const me = {
    name: 'Ghafor Sabury',
    age: 30,
    speak(lang) {
        return lang;
    },
    spend(amount) {
        return amount;
    },
};
console.log(`${me.name} is ${me.age} years old, he can speak ${me.speak("English")} and spent ${me.spend(100)}$ every day`);
const someone = {
    name: 'Fahim',
    age: 36,
    speak(lang) {
        return lang;
    },
    spend(amount) {
        return amount;
    },
};
const greetPerson = (person) => {
    console.log(`${person.name} is ${person.age} years old, he can speak ${person.speak("English")} and spent ${person.spend(200)}$ every day`);
};
greetPerson(someone);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(`${inv.client}  ${inv.amount} ${inv.format()}`);
});
