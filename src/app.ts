"use strict";
// var anchor = document.querySelector('a') as HTMLAnchorElement;
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;


import { Invoice } from "./classes/Invoice.js";

// interfaces
export interface IsPerson {
    name: string;
    age?: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Ghafor Sabury',
    age: 30,
    speak(lang: string): string {
        return lang;
    },
    spend(amount: number): number {
        return amount;
    },
};
console.log(`${me.name} is ${me.age} years old, he can speak ${me.speak("English")} and spent ${me.spend(100)}$ every day`);


const someone: IsPerson = {
    name: 'Fahim',
    age: 36,
    speak(lang: string): string {
        return lang;
    },
    spend(amount: number): number {
        return amount;
    },
};

const greetPerson = (person: IsPerson): void => {
    console.log(`${person.name} is ${person.age} years old, he can speak ${person.speak("English")} and spent ${person.spend(200)}$ every day`);
}

greetPerson(someone);


const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(`${inv.client}  ${inv.amount} ${inv.format()}`);
})


// var form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
// var type = document.querySelector('#type') as HTMLSelectElement;
// var tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// var details = document.querySelector('#details') as HTMLInputElement;
// var amount = document.querySelector('#amount') as HTMLInputElement;

// Submit form
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
// });