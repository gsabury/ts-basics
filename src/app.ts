"use strict";
var anchor = document.querySelector('a') as HTMLAnchorElement;
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
var type = document.querySelector('#type') as HTMLSelectElement;
var tofrom = document.querySelector('#tofrom') as HTMLInputElement;
var details = document.querySelector('#details') as HTMLInputElement;
var amount = document.querySelector('#amount') as HTMLInputElement;

// Submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});