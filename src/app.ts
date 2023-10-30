import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// get form and inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

});


// Generics

// Function in normal way
// function printData(data: number | string | boolean) {
//     console.log("Data: ", data);
// }
// printData(80);
// printData("Hello, good morning");
// printData(true);

// function printData<T>(data: T) {
//     console.log("Data", data);
// }
// printData(80);
// printData("Hello, good morning");
// printData(true);
// printData({ name: "Ali", age: 20, phone: "0787509653" });
// printData([1, 2, 3, 4]);
// printData([1, 2, 3, "Book"]);
