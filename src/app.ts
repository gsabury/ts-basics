"use strict";
var anchor = document.querySelector('a') as HTMLAnchorElement;
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;



// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number,
      ){}
      

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

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